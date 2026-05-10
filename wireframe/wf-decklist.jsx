// Synapse — Deck list / home wireframes
// A: sparse hero · B: packed tree

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

function DeckListB() {
  const decks = [
    { name: 'Medicine', depth: 0, open: true, due: 47, learn: 8, neu: 12 },
    { name: 'Cardiology', depth: 1, open: true, due: 27, learn: 4, neu: 6 },
    { name: 'Anatomy', depth: 2, open: false, due: 12, learn: 2, neu: 0 },
    { name: 'Pharmacology', depth: 2, open: false, due: 14, learn: 2, neu: 6 },
    { name: 'ECG patterns', depth: 2, open: false, due: 1, learn: 0, neu: 0 },
    { name: 'Neurology', depth: 1, open: false, due: 14, learn: 4, neu: 6 },
    { name: 'AnKing — Step 1', depth: 0, open: false, due: 6, learn: 0, neu: 0 },
    { name: 'Portuguese vocab', depth: 0, open: false, due: 0, learn: 0, neu: 0 },
  ];
  return (
    <div className="wf">
      <StatusBar />
      <div className="appbar" style={{ paddingBottom: 6 }}>
        <h1>Synapse</h1>
        <div className="fl gap-10 center">
          <div className="ico"><I.filter /></div>
          <div className="ico"><I.gear /></div>
        </div>
      </div>

      {/* search */}
      <div style={{ padding: '0 18px 8px' }}>
        <div className="sketchy-soft fl center gap-8" style={{ padding: '8px 12px', borderRadius: 999 }}>
          <div className="ico"><I.search /></div>
          <span style={{ color: 'var(--ink-faint)', fontSize: 14 }}>search decks, tags, cards…</span>
        </div>
      </div>

      {/* today summary strip */}
      <div className="fl center between" style={{ margin: '4px 18px 10px', padding: '10px 14px', background: 'var(--paper-shade)', border: '1.5px solid var(--ink-soft)', borderRadius: 8 }}>
        <div>
          <div className="wf-handwritten" style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1 }}>today</div>
          <div className="wf-handwritten accent" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.05 }}>
            47 cards · 18 min
          </div>
        </div>
        <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 15 }}>Study →</button>
      </div>

      {/* filter chips */}
      <div className="fl gap-6 wrap" style={{ padding: '0 18px 8px' }}>
        <span className="chip chip-on">all decks</span>
        <span className="chip">due only</span>
        <span className="chip">⚑ flagged</span>
        <span className="chip"><I.tag /> by tag</span>
      </div>

      {/* tree */}
      <div className="fl-col fl-1" style={{ padding: '0 18px', overflow: 'hidden' }}>
        <div className="fl center" style={{ padding: '6px 4px', fontFamily: 'Caveat', fontSize: 14, color: 'var(--ink-soft)', borderBottom: '1.5px solid var(--ink-faint)' }}>
          <span style={{ flex: 1 }}>Deck</span>
          <span style={{ width: 50, textAlign: 'center' }}>new</span>
          <span style={{ width: 50, textAlign: 'center' }}>lrn</span>
          <span style={{ width: 50, textAlign: 'center' }}>due</span>
        </div>
        {decks.map((d, i) => (
          <div key={i} className="fl center" style={{ padding: '8px 4px', borderBottom: '1px dashed var(--ink-faint)', fontSize: 14 }}>
            <span style={{ width: 20, color: 'var(--ink-faint)' }}>
              {d.depth < 2 && <I.chev dir={d.open ? 'd' : 'r'} />}
            </span>
            <span style={{ flex: 1, paddingLeft: d.depth * 14, fontSize: 14 + (d.depth === 0 ? 1 : 0), fontWeight: d.depth === 0 ? 700 : 400 }}>
              <span className="wf-mono" style={{ color: 'var(--ink-faint)', fontSize: 11 }}>
                {d.depth === 1 ? '└─ ' : d.depth === 2 ? '   └─ ' : ''}
              </span>
              {d.name}
            </span>
            <span style={{ width: 50, textAlign: 'center' }}>
              {d.neu > 0 ? <span className="due-pill new">{d.neu}</span> : <span className="faint">·</span>}
            </span>
            <span style={{ width: 50, textAlign: 'center' }}>
              {d.learn > 0 ? <span className="due-pill learn">{d.learn}</span> : <span className="faint">·</span>}
            </span>
            <span style={{ width: 50, textAlign: 'center' }}>
              {d.due > 0 ? <span className="due-pill due">{d.due}</span> : <span className="due-pill zero">0</span>}
            </span>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className="fl between center" style={{ padding: '10px 18px', borderTop: '1.5px solid var(--ink-faint)' }}>
        <span className="wf-mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>32 471 cards · 8 decks</span>
        <div className="fl gap-8 center">
          <button className="btn btn-ghost" style={{ padding: '6px 12px', fontSize: 13 }}>+ deck</button>
          <button className="btn" style={{ padding: '6px 12px', fontSize: 13 }}>import .apkg</button>
        </div>
      </div>

      <Note style={{ top: 80, right: 14, transform: 'rotate(-3deg)' }} arrow="↑">
        global search<br />— decks + cards + tags
      </Note>
      <Note style={{ top: 380, left: -2, transform: 'rotate(-2deg)' }} arrow="→">
        nested tree,<br />tap parent to expand
      </Note>
      <Note style={{ bottom: 70, right: 8, transform: 'rotate(2deg)' }} arrow="↓">
        per-column counts<br />new / learn / due
      </Note>
    </div>
  );
}

Object.assign(window, { DeckListA, DeckListB });
