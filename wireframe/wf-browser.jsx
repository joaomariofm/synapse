// Synapse — Card browser wireframes
// A: sparse, search-first, mobile-feeling list
// B: packed, tabular w/ tag tree sidebar

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

function BrowserB() {
  const cards = [
    { sel: true, front: 'Mechanism of β-blockers in heart failure', deck: 'Cardio·Pharm', due: 'today', ease: 2.4, reps: 12, lapses: 1 },
    { sel: false, front: 'SA node — pacemaker rate', deck: 'Cardio·Anat', due: '2d', ease: 2.7, reps: 8, lapses: 0 },
    { sel: false, front: 'Define ejection fraction', deck: 'Cardio·Anat', due: '5d', ease: 2.5, reps: 6, lapses: 0 },
    { sel: true, front: '4 causes of right axis deviation', deck: 'Cardio·ECG', due: 'new', ease: '—', reps: 0, lapses: 0 },
    { sel: false, front: 'P-wave morphology in atrial enlargement', deck: 'AnKing S1', due: 'susp', ease: 2.1, reps: 4, lapses: 2 },
    { sel: false, front: 'Carvedilol vs metoprolol succinate', deck: 'Cardio·Pharm', due: '1d', ease: 2.6, reps: 9, lapses: 1 },
    { sel: false, front: 'Frank-Starling mechanism', deck: 'Cardio·Phys', due: '12d', ease: 2.8, reps: 14, lapses: 0 },
    { sel: false, front: 'NYHA functional classes', deck: 'Cardio·Clin', due: '3d', ease: 2.5, reps: 7, lapses: 1 },
    { sel: false, front: 'ACE-I contraindications', deck: 'Pharm', due: '4d', ease: 2.6, reps: 11, lapses: 0 },
  ];
  return (
    <div className="wf">
      <StatusBar />

      {/* top toolbar */}
      <div className="appbar" style={{ paddingBottom: 6 }}>
        <div className="fl center gap-8">
          <div className="ico"><I.back /></div>
          <h1 style={{ fontSize: 20 }}>browse</h1>
          <span className="wf-mono soft" style={{ fontSize: 11 }}>· 1 248 cards</span>
        </div>
        <div className="fl center gap-6">
          <span className="wf-mono soft" style={{ fontSize: 11 }}>2 selected</span>
          <button className="btn btn-ghost" style={{ padding: '4px 10px', fontSize: 12 }}>⏸ suspend</button>
          <button className="btn btn-ghost" style={{ padding: '4px 10px', fontSize: 12 }}>+ tag</button>
          <button className="btn btn-ghost" style={{ padding: '4px 10px', fontSize: 12 }}>move</button>
          <div className="ico"><I.more /></div>
        </div>
      </div>

      {/* search + filter chips */}
      <div className="fl gap-6 center" style={{ padding: '0 12px 6px' }}>
        <div className="sketchy-soft fl center gap-6" style={{ padding: '6px 10px', borderRadius: 6, flex: 1 }}>
          <I.search />
          <span className="wf-mono" style={{ fontSize: 12, color: 'var(--ink-faint)' }}>tag:cardio is:due</span>
        </div>
        <span className="chip" style={{ fontSize: 11 }}>is:due</span>
        <span className="chip" style={{ fontSize: 11 }}>flag:any</span>
        <span className="chip" style={{ fontSize: 11 }}>+ filter</span>
      </div>

      <div className="fl fl-1" style={{ padding: '0 12px 8px', gap: 10, minHeight: 0 }}>
        {/* tag tree sidebar */}
        <div className="fl-col" style={{ width: 165, flexShrink: 0, paddingTop: 4 }}>
          <div className="wf-handwritten soft" style={{ fontSize: 14, marginBottom: 4 }}>tags</div>
          {[
            { name: 'cardio', d: 0, count: 312, on: true, open: true },
            { name: 'anatomy', d: 1, count: 124 },
            { name: 'pharm', d: 1, count: 96, on: true },
            { name: 'ecg', d: 1, count: 64 },
            { name: 'phys', d: 1, count: 28 },
            { name: 'neuro', d: 0, count: 188 },
            { name: 'anking', d: 0, count: 412, open: true },
            { name: 'step1', d: 1, count: 280 },
            { name: 'step2', d: 1, count: 132 },
            { name: 'high-yield', d: 0, count: 96 },
          ].map((t, i) => (
            <div key={i} className={'tree-node ' + (t.on ? 'active' : '')} style={{ paddingLeft: 4 + t.d * 12 }}>
              <span style={{ width: 10, color: 'var(--ink-faint)' }}>
                {t.d === 0 ? <I.chev dir={t.open ? 'd' : 'r'} /> : '·'}
              </span>
              <span className="wf-mono" style={{ fontSize: 11, flex: 1 }}>#{t.name}</span>
              <span className="wf-mono faint" style={{ fontSize: 10 }}>{t.count}</span>
            </div>
          ))}
          <div className="muted-line" style={{ margin: '8px 0' }} />
          <div className="wf-handwritten soft" style={{ fontSize: 14, marginBottom: 4 }}>state</div>
          <div className="tree-node"><span className="wf-mono" style={{ fontSize: 11 }}>· new</span></div>
          <div className="tree-node"><span className="wf-mono" style={{ fontSize: 11 }}>· learning</span></div>
          <div className="tree-node"><span className="wf-mono" style={{ fontSize: 11 }}>· review</span></div>
          <div className="tree-node"><span className="wf-mono" style={{ fontSize: 11 }}>· suspended</span></div>
        </div>

        {/* table */}
        <div className="fl-col" style={{ flex: 1, minWidth: 0, border: '1.5px solid var(--ink-soft)', borderRadius: 6, overflow: 'hidden' }}>
          <table className="tbl">
            <thead>
              <tr>
                <th style={{ width: 22 }}>☐</th>
                <th>Front</th>
                <th style={{ width: 55 }}>Due</th>
                <th style={{ width: 36 }}>Ease</th>
                <th style={{ width: 32 }}>Rev</th>
                <th style={{ width: 32 }}>Laps</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((c, i) => (
                <tr key={i} style={{ background: c.sel ? 'var(--accent-soft)' : 'transparent' }}>
                  <td>{c.sel ? <span className="accent"><I.check /></span> : '☐'}</td>
                  <td>
                    <div style={{ lineHeight: 1.25 }}>{c.front}</div>
                    <div className="wf-mono faint" style={{ fontSize: 9 }}>{c.deck}</div>
                  </td>
                  <td>
                    {c.due === 'susp'
                      ? <span className="due-pill zero">⏸</span>
                      : c.due === 'new'
                        ? <span className="due-pill new">new</span>
                        : <span className="due-pill due">{c.due}</span>}
                  </td>
                  <td className="wf-mono">{c.ease}</td>
                  <td className="wf-mono">{c.reps}</td>
                  <td className="wf-mono" style={{ color: c.lapses > 0 ? 'var(--accent)' : 'var(--ink-faint)' }}>{c.lapses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Note style={{ top: 90, right: 12, transform: 'rotate(2deg)' }} arrow="↑">
        bulk-action toolbar<br />when rows selected<br />(suspend by tag = key)
      </Note>
      <Note style={{ top: 280, left: -2, transform: 'rotate(-2deg)' }} arrow="→">
        nested tag tree —<br />multi-select
      </Note>
      <Note style={{ bottom: 70, right: 6, transform: 'rotate(2deg)' }} arrow="↓">
        ease / reviews /<br />lapses visible —<br />FSRS triage
      </Note>
    </div>
  );
}

Object.assign(window, { BrowserA, BrowserB });
