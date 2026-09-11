import React, { useState } from 'react';
import {
  Share2, ArrowRight, Info, BookOpen
} from 'lucide-react';
import { CONSTELLATION_CLUSTERS, type ConstellationCluster, type ConstellationEdge } from '../data/constellations';
import { ALL_CONCEPTS } from '../data';
import type { Concept } from '../types/curriculum';

interface ConstellationGraphViewProps {
  onSelectConcept: (concept: Concept) => void;
}

export const ConstellationGraphView: React.FC<ConstellationGraphViewProps> = ({
  onSelectConcept,
}) => {
  const [activeClusterId, setActiveClusterId] = useState<string>(CONSTELLATION_CLUSTERS[0].id);
  const activeCluster: ConstellationCluster =
    CONSTELLATION_CLUSTERS.find((c) => c.id === activeClusterId) || CONSTELLATION_CLUSTERS[0];

  const [selectedNodeId, setSelectedNodeId] = useState<string>(activeCluster.conceptIds[0]);

  // Concept lookup
  const conceptMap = React.useMemo(() => {
    const map = new Map<string, Concept>();
    ALL_CONCEPTS.forEach((c) => map.set(c.id, c));
    return map;
  }, []);

  const selectedConcept = conceptMap.get(selectedNodeId);

  // Incoming and outgoing edges for the selected node
  const activeEdges = activeCluster.edges.filter(
    (e) => e.sourceId === selectedNodeId || e.targetId === selectedNodeId
  );

  const getRelationshipBadge = (rel: ConstellationEdge['relationship']) => {
    switch (rel) {
      case 'Triggers':
        return 'bg-amber-950/40 text-amber-300 border-amber-600/30';
      case 'Compounds':
        return 'bg-rose-950/40 text-rose-300 border-rose-600/30';
      case 'Counteracts':
        return 'bg-emerald-950/40 text-emerald-300 border-emerald-600/30';
      case 'Reinforces':
        return 'bg-[#c48b76]/20 text-[#e5b8a6] border-[#c48b76]/40';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-[#c48b76]/20 bg-gradient-to-br from-[#12131a] via-[#0e0f14] to-[#08080a] p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#c48b76] mb-3">
            <Share2 className="h-3.5 w-3.5" />
            Cognitive Constellations • Dynamic Relationship Graphs
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-normal text-white tracking-tight">
            Causal Phenomenon Networks
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
            Psychological phenomena never occur in isolation. Trace how initial cognitive biases trigger social cascades, compound into escalating traps, and how surgical counter-weapons break the recursive cycle.
          </p>
        </div>
      </div>

      {/* Cluster Navigation Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {CONSTELLATION_CLUSTERS.map((cluster) => {
          const isSelected = cluster.id === activeClusterId;
          return (
            <button
              key={cluster.id}
              type="button"
              onClick={() => {
                setActiveClusterId(cluster.id);
                setSelectedNodeId(cluster.conceptIds[0]);
              }}
              className={`rounded-full border px-4 py-2 text-xs font-mono font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c48b76] ${
                isSelected
                  ? 'border-[#c48b76] bg-[#c48b76]/15 text-[#f4f4f6] shadow-lg shadow-[#c48b76]/10 ring-1 ring-[#c48b76]/40'
                  : 'border-white/10 bg-[#0e0f14] text-zinc-400 hover:border-white/20 hover:text-zinc-200'
              }`}
            >
              {cluster.name}
            </button>
          );
        })}
      </div>

      {/* Active Cluster Description */}
      <div className="rounded-2xl border border-white/10 bg-[#0e0f14] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-lg">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#c48b76]">
            ACTIVE CAUSAL LOOP
          </span>
          <h2 className="text-lg font-serif font-normal text-white mt-0.5">
            {activeCluster.tagline}
          </h2>
          <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
            {activeCluster.description}
          </p>
        </div>
        <div className="shrink-0 text-xs font-mono text-zinc-500">
          {activeCluster.conceptIds.length} Nodes • {activeCluster.edges.length} Causal Edges
        </div>
      </div>

      {/* Interactive Network & Causal Chain Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Center: Interactive Sequence Chain (Touch & Desktop friendly) */}
        <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#0e0f14] p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
              Causal Progression Web
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              Tap any node to inspect links
            </span>
          </div>

          {/* Sequential Step Nodes with Edge Indicators */}
          <div className="space-y-3 py-2">
            {activeCluster.conceptIds.map((cId, idx) => {
              const concept = conceptMap.get(cId);
              if (!concept) return null;
              const isSelected = cId === selectedNodeId;

              // Find outgoing edge from this node in this cluster
              const outgoingEdge = activeCluster.edges.find((e) => e.sourceId === cId);

              return (
                <div key={cId} className="space-y-3">
                  {/* The Concept Node Card */}
                  <button
                    type="button"
                    onClick={() => setSelectedNodeId(cId)}
                    className={`w-full text-left rounded-2xl border p-4 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c48b76] ${
                      isSelected
                        ? 'border-[#c48b76] bg-[#c48b76]/10 shadow-lg shadow-[#c48b76]/10 ring-1 ring-[#c48b76]/40'
                        : 'border-white/5 bg-[#08080a] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/10 text-[#c48b76] font-mono text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-[#c48b76] uppercase">
                          #{concept.globalIndex}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {concept.difficulty}
                      </span>
                    </div>

                    <h3 className="text-base font-serif font-normal text-white tracking-tight">
                      {concept.title}
                    </h3>

                    <p className="mt-1 text-xs text-zinc-400 line-clamp-1 italic font-serif">
                      &ldquo;{concept.plainEnglishAnalogy}&rdquo;
                    </p>
                  </button>

                  {/* Outgoing Causal Arrow & Connector */}
                  {outgoingEdge && (
                    <div className="flex items-center justify-center gap-2 py-0.5 px-4 text-center">
                      <div className="h-4 w-px bg-white/10" />
                      <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#08080a] px-3 py-1 text-[10px] font-mono font-bold uppercase shadow-sm">
                        <span className={`px-1.5 py-0.2 rounded border ${getRelationshipBadge(outgoingEdge.relationship)}`}>
                          {outgoingEdge.relationship}
                        </span>
                        <span className="text-zinc-400 hidden sm:inline truncate max-w-xs font-light">
                          {outgoingEdge.explanation}
                        </span>
                        <ArrowRight className="h-3 w-3 text-zinc-500" />
                      </div>
                      <div className="h-4 w-px bg-white/10" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Node Inspector & Edge Details */}
        <div className="lg:col-span-5 space-y-4">
          {selectedConcept ? (
            <div className="rounded-3xl border border-white/10 bg-[#0e0f14] p-6 shadow-2xl space-y-5 sticky top-20">
              {/* Header */}
              <div className="border-b border-white/10 pb-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#c48b76] mb-1">
                  <span>CONCEPT #{selectedConcept.globalIndex}</span>
                  <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] text-zinc-300">
                    Sphere {selectedConcept.numberInSphere}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-normal text-white">
                  {selectedConcept.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-400 font-light">
                  {selectedConcept.tagline}
                </p>
              </div>

              {/* Intuitive Everyday Analogy */}
              <div className="rounded-2xl border border-[#c48b76]/20 bg-[#c48b76]/5 p-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c48b76] block mb-1">
                  Intuitive Mental Model Analogy:
                </span>
                <p className="text-xs text-[#f4f4f6] italic leading-relaxed font-serif">
                  &ldquo;{selectedConcept.plainEnglishAnalogy}&rdquo;
                </p>
              </div>

              {/* Mechanism */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 block">
                  Scientific Mechanism:
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {selectedConcept.underlyingMechanism.summary}
                </p>
              </div>

              {/* Active Node Edges in this Cluster */}
              <div className="space-y-2 border-t border-white/10 pt-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Active Connections in This Loop:
                </span>
                {activeEdges.length > 0 ? (
                  <div className="space-y-2">
                    {activeEdges.map((edge, idx) => {
                      const isSource = edge.sourceId === selectedConcept.id;
                      const otherId = isSource ? edge.targetId : edge.sourceId;
                      const otherConcept = conceptMap.get(otherId);

                      return (
                        <div
                          key={idx}
                          className="rounded-xl border border-white/5 bg-[#08080a] p-3 text-xs space-y-1"
                        >
                          <div className="flex items-center gap-1.5 font-mono text-[10px]">
                            <span className={`px-1.5 py-0.5 rounded font-bold uppercase border ${getRelationshipBadge(edge.relationship)}`}>
                              {isSource ? `→ ${edge.relationship}` : `← Caused by`}
                            </span>
                            <span className="font-serif text-sm font-normal text-white truncate">
                              #{otherConcept?.globalIndex} {otherConcept?.title}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                            {edge.explanation}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-zinc-500">
                    Select adjacent nodes to trace the connection.
                  </p>
                )}
              </div>

              {/* Button to Launch Full Briefing Modal */}
              <button
                type="button"
                onClick={() => onSelectConcept(selectedConcept)}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-white py-3 text-xs font-mono font-bold uppercase tracking-widest text-black shadow-lg shadow-white/10 hover:bg-[#f4f4f6] transition-all cursor-pointer"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Open Full Briefing #{selectedConcept.globalIndex}</span>
              </button>
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-[#0e0f14] p-6 text-center text-zinc-400">
              <Info className="h-6 w-6 mx-auto mb-2 text-zinc-500" />
              <p className="text-xs">Click on any node in the causal graph to inspect details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
