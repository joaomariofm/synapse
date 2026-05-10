// Synapse — Deck list / home wireframe
// Sparse hero · recent decks below

function DeckListA() {
  return (
    <div className="wf">
      <StatusBar />
      <div className="appbar">
        <h1>Synapse</h1>
        <div className="fl gap-12 center">
          <div className="ico"><I.search /></div>
          <div className="ico"><I.gear /></div>
        </div>
      </div>

      {/* Hero — today's count */}
      <div style={{ padding: '40px 28px 24px', textAlign: 'center' }}>
        <div className="wf-handwritten" style={{ fontSize: 22, color: 'var(--ink-soft)', marginBottom: 4 }}>
          due today
        </div>
        <div className="wf-handwritten" style={{ fontSize: 140, lineHeight: 0.9, color: 'var(--accent)', fontWeight: 700 }}>
          47
        </div>
        <div className="fl gap-16 center" style={{ justifyContent: 'center', marginTop: 6, fontSize: 13, color: 'var(--ink-soft)' }}>
          <span><span className="due-pill new">12</span> new</span>
          <span><span className="due-pill learn">8</span> learning</span>
          <span><span className="due-pill due">27</span> review</span>
        </div>

        <button className="btn btn-primary" style={{ marginTop: 28, padding: '14px 36px', fontSize: 18 }}>
          Study now →
        </button>
        <div className="wf-handwritten" style={{ marginTop: 8, fontSize: 16, color: 'var(--ink-faint)' }}>
          ≈ 18 min
        </div>
      </div>

      <hr className="muted-line" style={{ margin: '12px 28px' }} />

      {/* recent / pinned decks */}
      <div style={{ padding: '4px 28px' }}>
        <div className="wf-handwritten" style={{ fontSize: 20, color: 'var(--ink-soft)', marginBottom: 8 }}>
          recent decks
        </div>
        <div className="fl-col">
          {[
            { name: 'Cardiology', sub: '4 subdecks', due: 27 },
            { name: 'Pharmacology', sub: '7 subdecks', due: 14 },
            { name: 'AnKing — Step 1', sub: '32k cards · imported', due: 6 },
          ].map((d) => (
            <div key={d.name} className="deck-row" style={{ borderBottom: '1.5px dashed var(--ink-faint)' }}>
              <div className="ico"><I.folder /></div>
              <div style={{ flex: 1 }}>
                <div className="deck-name">{d.name}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-faint)' }} className="wf-mono">{d.sub}</div>
              </div>
              {d.due > 0
                ? <span className="due-pill due">{d.due}</span>
                : <span className="due-pill zero">0</span>}
              <div className="ico"><I.chev /></div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* tab bar */}
      <div className="fl between" style={{ borderTop: '1.5px solid var(--ink-faint)', padding: '10px 40px 14px', fontFamily: 'Caveat', fontSize: 17 }}>
        <div className="fl-col center" style={{ alignItems: 'center', color: 'var(--accent)', fontWeight: 700 }}>
          <div className="ico ico-lg" style={{ color: 'var(--accent)' }}><I.folder /></div>
          home
        </div>
        <div className="fl-col center" style={{ alignItems: 'center', color: 'var(--ink-faint)' }}>
          <div className="ico ico-lg"><I.search /></div>
          browse
        </div>
        <div className="fl-col center" style={{ alignItems: 'center', color: 'var(--ink-faint)' }}>
          <div className="ico ico-lg"><I.plus /></div>
          add
        </div>
        <div className="fl-col center" style={{ alignItems: 'center', color: 'var(--ink-faint)' }}>
          <div className="ico ico-lg"><I.gear /></div>
          stats
        </div>
      </div>

      <Note style={{ top: 220, right: 28, transform: 'rotate(4deg)' }} arrow="↗">
        single hero number<br />— one tap to study
      </Note>
      <Note style={{ top: 540, left: 18 }} arrow="↘">
        only 3 most-recent<br />decks shown
      </Note>
    </div>
  );
}

Object.assign(window, { DeckListA });
