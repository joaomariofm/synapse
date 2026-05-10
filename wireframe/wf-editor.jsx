// Synapse — Card editor wireframes
// A: sparse single-column   ·   B: packed split-preview

function EditorA() {
  return (
    <div className="wf">
      <StatusBar />
      <div className="appbar" style={{ paddingBottom: 8 }}>
        <div className="fl center gap-10">
          <div className="ico"><I.back /></div>
          <h1 style={{ fontSize: 24 }}>new card</h1>
        </div>
        <button className="btn btn-primary" style={{ padding: '6px 16px', fontSize: 14 }}>save</button>
      </div>

      {/* type pill row */}
      <div style={{ padding: '0 24px 14px' }}>
        <div className="fl gap-6">
          <span className="chip chip-on">Basic</span>
          <span className="chip">Cloze</span>
          <span className="chip" style={{ opacity: 0.5 }}>Image Occlusion <span className="wf-mono" style={{ fontSize: 9 }}>(import only)</span></span>
        </div>
      </div>

      {/* form — generous spacing */}
      <div className="fl-col fl-1" style={{ padding: '0 24px', gap: 22, overflow: 'hidden' }}>
        <div>
          <label className="field-label">Front</label>
          <div className="field-input field-textarea" style={{ minHeight: 90 }}>
            <span style={{ color: 'var(--ink-faint)' }}>What does the SA node do?</span>
          </div>
        </div>

        <div>
          <label className="field-label">Back</label>
          <div className="field-input field-textarea" style={{ minHeight: 130, position: 'relative' }}>
            <span style={{ color: 'var(--ink-faint)' }}>Initiates the cardiac action potential…</span>
            {/* tiny formatting toolbar */}
            <div className="fl gap-8" style={{ position: 'absolute', bottom: 6, right: 8, color: 'var(--ink-faint)', fontFamily: 'Courier New', fontSize: 12 }}>
              <span style={{ fontWeight: 700 }}>B</span>
              <span style={{ fontStyle: 'italic' }}>I</span>
              <span style={{ textDecoration: 'underline' }}>U</span>
              <span>🖼</span>
              <span>{'{{c}}'}</span>
            </div>
          </div>
        </div>

        <div className="fl gap-12">
          <div style={{ flex: 1 }}>
            <label className="field-label">Deck</label>
            <div className="field-input fl center between">
              <span><I.folder /> &nbsp; Cardiology :: Anatomy</span>
              <I.chev dir="d" />
            </div>
          </div>
        </div>

        <div>
          <label className="field-label">Tags</label>
          <div className="fl gap-6 wrap" style={{ padding: 8, border: '1.5px solid var(--ink-soft)', borderRadius: 6, minHeight: 50 }}>
            <span className="chip chip-tag">#cardio</span>
            <span className="chip chip-tag">#anatomy::heart</span>
            <span className="wf-mono" style={{ color: 'var(--ink-faint)', fontSize: 12, padding: '4px 6px' }}>+ add tag…</span>
          </div>
        </div>
      </div>

      {/* footer / next */}
      <div className="fl between center" style={{ padding: '12px 24px', borderTop: '1.5px dashed var(--ink-faint)' }}>
        <button className="btn btn-ghost" style={{ padding: '6px 14px', fontSize: 13 }}>cancel</button>
        <div className="fl gap-8">
          <button className="btn" style={{ padding: '8px 14px', fontSize: 14 }}>save & new</button>
          <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 14 }}>save</button>
        </div>
      </div>

      <Note style={{ top: 130, right: 10, transform: 'rotate(2deg)' }} arrow="↑">
        type as pill row<br />— IO greyed (v1<br />render-only)
      </Note>
      <Note style={{ top: 350, right: 6, transform: 'rotate(-3deg)' }} arrow="→">
        big text fields,<br />no preview pane<br />— focus on writing
      </Note>
    </div>
  );
}

function EditorB() {
  return (
    <div className="wf">
      <StatusBar />
      <div className="appbar" style={{ paddingBottom: 6 }}>
        <div className="fl center gap-10">
          <div className="ico"><I.back /></div>
          <h1 style={{ fontSize: 22 }}>edit card</h1>
          <span className="wf-mono" style={{ fontSize: 10, color: 'var(--ink-faint)' }}>· note 481 · 3 cards</span>
        </div>
        <div className="fl gap-8 center">
          <button className="btn btn-ghost" style={{ padding: '4px 10px', fontSize: 12 }}>cancel</button>
          <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: 13 }}>save</button>
        </div>
      </div>

      {/* deck + type strip */}
      <div className="fl gap-8 center" style={{ padding: '0 14px 8px', fontSize: 12 }}>
        <span className="wf-mono soft">deck</span>
        <span className="chip" style={{ fontSize: 11 }}><I.folder /> &nbsp;Cardiology :: Pharm <I.chev dir="d" /></span>
        <span className="wf-mono soft">type</span>
        <span className="chip chip-on" style={{ fontSize: 11 }}>Cloze</span>
        <span style={{ marginLeft: 'auto' }} className="wf-mono soft">3 cards generated</span>
      </div>

      {/* tabs across editor */}
      <div className="tabs" style={{ padding: '0 14px' }}>
        <span className="tab tab-active">Fields</span>
        <span className="tab">Template</span>
        <span className="tab">CSS</span>
        <span className="tab">History</span>
      </div>

      {/* split form / preview */}
      <div className="fl fl-1" style={{ padding: 12, gap: 10, minHeight: 0 }}>
        {/* LEFT — form */}
        <div className="fl-col" style={{ flex: 1, gap: 10, overflow: 'hidden' }}>
          <div>
            <label className="field-label" style={{ fontSize: 14 }}>Text</label>
            <div className="field-input" style={{ fontSize: 13, minHeight: 80, lineHeight: 1.45 }}>
              In heart failure, <span style={{ background: 'var(--highlight)', padding: '0 2px' }}>{'{{c1::β-blockers}}'}</span> reduce mortality by inhibiting <span style={{ background: 'var(--highlight)', padding: '0 2px' }}>{'{{c2::β1-adrenergic}}'}</span> receptor activation.
            </div>
          </div>
          <div>
            <label className="field-label" style={{ fontSize: 14 }}>Extra</label>
            <div className="field-input" style={{ fontSize: 13, minHeight: 50, color: 'var(--ink-soft)' }}>
              Carvedilol &amp; metoprolol succinate are first-line.
            </div>
          </div>
          <div>
            <label className="field-label" style={{ fontSize: 14 }}>Tags</label>
            <div className="fl gap-4 wrap" style={{ padding: 6, border: '1.5px solid var(--ink-soft)', borderRadius: 6 }}>
              <span className="chip chip-tag">#cardio</span>
              <span className="chip chip-tag">#pharm::beta-blockers</span>
              <span className="chip chip-tag">#anking::step1</span>
              <span className="chip chip-tag">#high-yield</span>
              <span className="wf-mono faint" style={{ fontSize: 11, padding: '4px 4px' }}>+</span>
            </div>
          </div>

          {/* card list (this note generates 3) */}
          <div className="fl-col" style={{ marginTop: 'auto', padding: 8, background: 'var(--paper-shade)', borderRadius: 6, border: '1.5px dashed var(--ink-faint)', gap: 4 }}>
            <span className="wf-handwritten soft" style={{ fontSize: 14 }}>cards from this note</span>
            <div className="fl between" style={{ fontSize: 11 }}><span>· card 1 (c1)</span><span className="wf-mono accent">due 2d</span></div>
            <div className="fl between" style={{ fontSize: 11 }}><span>· card 2 (c2)</span><span className="wf-mono soft">new</span></div>
            <div className="fl between" style={{ fontSize: 11 }}><span>· card 3 (extra)</span><span className="wf-mono faint">suspended</span></div>
          </div>
        </div>

        {/* RIGHT — preview */}
        <div className="fl-col" style={{ flex: 1, gap: 8 }}>
          <div className="fl gap-4 center">
            <span className="wf-handwritten soft" style={{ fontSize: 14, marginRight: 4 }}>preview</span>
            <span className="chip chip-on" style={{ fontSize: 10 }}>front</span>
            <span className="chip" style={{ fontSize: 10 }}>back</span>
            <span style={{ marginLeft: 'auto' }} className="ico"><I.eye /></span>
          </div>
          <div className="flashcard dashed" style={{ flex: 1, padding: 14, fontSize: 14, lineHeight: 1.4 }}>
            <div className="wf-mono faint" style={{ fontSize: 9, marginBottom: 6 }}>card 1 · cloze 1</div>
            In heart failure, <span className="cloze-blank">_______</span> reduce mortality by inhibiting <span className="cloze-revealed">β1-adrenergic</span> receptor activation.
            <div className="muted-line" />
            <div className="wf-mono faint" style={{ fontSize: 9 }}>extra:</div>
            <span style={{ color: 'var(--ink-soft)', fontSize: 12 }}>Carvedilol &amp; metoprolol succinate are first-line.</span>
          </div>
          <div className="fl gap-4">
            <span className="chip" style={{ fontSize: 10 }}>↻ flip</span>
            <span className="chip" style={{ fontSize: 10 }}>desktop</span>
            <span className="chip chip-on" style={{ fontSize: 10 }}>tablet</span>
          </div>
        </div>
      </div>

      <Note style={{ top: 100, right: 10, transform: 'rotate(-3deg)' }} arrow="↑">
        tabs: fields /<br />template / css /<br />history
      </Note>
      <Note style={{ top: 380, left: 0, transform: 'rotate(-2deg)' }} arrow="→">
        live preview<br />right of form
      </Note>
      <Note style={{ bottom: 50, left: 6 }} arrow="↗">
        sibling cards listed<br />w/ scheduling state
      </Note>
    </div>
  );
}

Object.assign(window, { EditorA, EditorB });
