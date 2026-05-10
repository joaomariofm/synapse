// Synapse — Card editor wireframe
// Sparse single column — just write

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

Object.assign(window, { EditorA });
