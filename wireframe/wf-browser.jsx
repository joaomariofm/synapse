// Synapse — Card browser wireframe
// Sparse, search-first, mobile-feeling list

function BrowserA() {
  const cards = [
    { front: 'Mechanism of β-blockers in heart failure', deck: 'Cardio · Pharm', due: 'today', tag: '#cardio' },
    { front: 'SA node — pacemaker rate', deck: 'Cardio · Anatomy', due: '2d', tag: '#anatomy' },
    { front: 'Define ejection fraction', deck: 'Cardio · Anatomy', due: '5d', tag: '#high-yield' },
    { front: 'List 4 causes of right axis deviation', deck: 'Cardio · ECG', due: 'new', tag: '#ecg' },
    { front: 'AnKing :: P-wave morphology in atrial enlargement', deck: 'AnKing Step 1', due: 'susp', tag: '#anking' },
    { front: 'Carvedilol vs metoprolol succinate — when to prefer', deck: 'Cardio · Pharm', due: '1d', tag: '#pharm' },
  ];
  return (
    <div className="wf">
      <StatusBar />
      <div className="appbar" style={{ paddingBottom: 8 }}>
        <div className="fl center gap-10">
          <div className="ico"><I.back /></div>
          <h1 style={{ fontSize: 24 }}>browse</h1>
        </div>
        <div className="fl gap-12 center">
          <div className="ico"><I.filter /></div>
          <div className="ico"><I.more /></div>
        </div>
      </div>

      {/* big search */}
      <div style={{ padding: '0 22px 12px' }}>
        <div className="sketchy-box fl center gap-8" style={{ padding: '12px 16px', borderRadius: 14 }}>
          <div className="ico"><I.search /></div>
          <span style={{ fontSize: 16 }}>β-blocker</span>
          <span style={{ marginLeft: 'auto', color: 'var(--ink-faint)' }} className="wf-mono">×</span>
        </div>
      </div>

      {/* tag chips — scrollable */}
      <div className="fl gap-6" style={{ padding: '0 22px 12px', overflow: 'hidden', flexWrap: 'wrap' }}>
        <span className="chip chip-on">all</span>
        <span className="chip chip-tag">#cardio</span>
        <span className="chip chip-tag">#pharm</span>
        <span className="chip chip-tag">#anking</span>
        <span className="chip chip-tag">#high-yield</span>
        <span className="chip" style={{ color: 'var(--ink-faint)' }}>+12 more →</span>
      </div>

      <div className="wf-handwritten" style={{ padding: '0 22px 4px', fontSize: 16, color: 'var(--ink-soft)' }}>
        14 results
      </div>

      {/* sparse list */}
      <div className="fl-col fl-1" style={{ padding: '0 22px', overflow: 'hidden' }}>
        {cards.map((c, i) => (
          <div key={i} className="fl-col" style={{ padding: '14px 0', borderBottom: '1.5px dashed var(--ink-faint)', gap: 4 }}>
            <div className="fl between center">
              <span style={{ fontSize: 15, lineHeight: 1.35, flex: 1 }}>
                {c.front.includes('β-blocker') || c.front.includes('Carvedilol')
                  ? c.front.split(/(β-blocker|Carvedilol|metoprolol)/).map((part, j) =>
                      /β-blocker|Carvedilol|metoprolol/.test(part)
                        ? <span key={j} style={{ background: 'var(--highlight)', padding: '0 2px' }}>{part}</span>
                        : <span key={j}>{part}</span>
                    )
                  : c.front}
              </span>
              {c.due === 'susp'
                ? <span className="due-pill zero" style={{ marginLeft: 8 }}>⏸</span>
                : c.due === 'new'
                  ? <span className="due-pill new" style={{ marginLeft: 8 }}>new</span>
                  : <span className="due-pill due" style={{ marginLeft: 8 }}>{c.due}</span>}
            </div>
            <div className="fl gap-8 center" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
              <span className="wf-mono">{c.deck}</span>
              <span className="chip chip-tag" style={{ fontSize: 10, padding: '1px 6px' }}>{c.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <Note style={{ top: 130, right: 12, transform: 'rotate(-2deg)' }} arrow="↑">
        search hero,<br />tag chips below
      </Note>
      <Note style={{ top: 360, left: 4, transform: 'rotate(-3deg)' }} arrow="→">
        front-text +<br />deck + due,<br />nothing else
      </Note>
    </div>
  );
}

Object.assign(window, { BrowserA });
