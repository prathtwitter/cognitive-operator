import type { Concept } from '../types/curriculum';

export interface AudioState {
  isPlaying: boolean;
  isPaused: boolean;
  currentConceptId: string | null;
  speed: number;
}

type AudioListener = (state: AudioState) => void;

class AudioSpeechEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: Set<AudioListener> = new Set();
  private playlist: Concept[] = [];
  private playlistIndex: number = 0;
  private currentSpeed: number = 1.0;
  private activeConcept: Concept | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => this.listeners.delete(listener);
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach(fn => fn(state));
  }

  public getState(): AudioState {
    const isPlaying = !!(this.synth?.speaking && !this.synth?.paused);
    const isPaused = !!this.synth?.paused;
    return {
      isPlaying,
      isPaused,
      currentConceptId: this.activeConcept?.id || null,
      speed: this.currentSpeed,
    };
  }

  public getActiveConcept(): Concept | null {
    return this.activeConcept;
  }

  private selectVoice(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return null;

    // Prefer clear natural English voices
    const preferredNames = ['Samantha', 'Daniel', 'Karen', 'Google US English', 'Google UK English Female', 'Alex', 'Moira'];
    for (const name of preferredNames) {
      const match = voices.find(v => v.name.includes(name));
      if (match) return match;
    }

    // Fallback to any en-US or en-GB
    return voices.find(v => v.lang.startsWith('en')) || voices[0] || null;
  }

  public speakConcept(concept: Concept, autoNext = false) {
    if (!this.synth) return;

    this.stop();
    this.activeConcept = concept;

    // Build natural conversational audio briefing
    const primaryWeapon = concept.conversationalWeaponry[0]?.phrase || '';
    const script = `
      Concept ${concept.globalIndex}: ${concept.title}.
      The everyday mental model is: ${concept.plainEnglishAnalogy}.
      Here is how it happens in daily life: ${concept.everydayHumanBehavior}
      The core mechanism: ${concept.underlyingMechanism.summary}
      Your tactical conversational weapon to deploy: "${primaryWeapon}"
    `;

    const utterance = new SpeechSynthesisUtterance(script);
    utterance.rate = this.currentSpeed;
    utterance.pitch = 1.0;

    const voice = this.selectVoice();
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      this.notify();
    };

    utterance.onpause = () => {
      this.notify();
    };

    utterance.onresume = () => {
      this.notify();
    };

    utterance.onend = () => {
      if (autoNext && this.playlist.length > 0 && this.playlistIndex < this.playlist.length - 1) {
        this.playlistIndex++;
        const nextConcept = this.playlist[this.playlistIndex];
        setTimeout(() => {
          this.speakConcept(nextConcept, true);
        }, 1200);
      } else {
        this.activeConcept = null;
        this.currentUtterance = null;
        this.notify();
      }
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error', e);
      this.activeConcept = null;
      this.currentUtterance = null;
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
    this.notify();
  }

  public playConcept(concept: Concept) {
    this.speakConcept(concept, false);
  }

  public playPlaylist(concepts: Concept[], startIndex = 0) {
    if (!concepts || concepts.length === 0) return;
    this.playlist = concepts;
    this.playlistIndex = Math.min(Math.max(0, startIndex), concepts.length - 1);
    this.speakConcept(this.playlist[this.playlistIndex], true);
  }

  public pause() {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
      this.notify();
    }
  }

  public resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
      this.notify();
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
      this.activeConcept = null;
      this.notify();
    }
  }

  public setSpeed(rate: number) {
    this.currentSpeed = rate;
    if (this.currentUtterance && this.activeConcept) {
      const active = this.activeConcept;
      this.stop();
      this.speakConcept(active, this.playlist.length > 0);
    } else {
      this.notify();
    }
  }

  public next() {
    if (this.playlist.length > 0 && this.playlistIndex < this.playlist.length - 1) {
      this.playlistIndex++;
      this.speakConcept(this.playlist[this.playlistIndex], true);
    }
  }

  public prev() {
    if (this.playlist.length > 0 && this.playlistIndex > 0) {
      this.playlistIndex--;
      this.speakConcept(this.playlist[this.playlistIndex], true);
    }
  }
}

export const audioEngine = new AudioSpeechEngine();
