// Synapse — Study session wireframe
// Sparse / immersive — card commands the screen

function StudyA() {
  return (
    <div className="wf">
      <StatusBar />

      {/* minimal top — just counter + thin progress */}
      <div style={{ padding: '14px 24px 6px' }}>
        <div className="fl between center">
          <div className="ico"><I.back /></div>
          <span className="wf-mono" style={{ fontSize: 12, color: 'var(--ink-soft)' }}>12 / 47</span>
          <div className="ico"><I.more /></div>
        </div>
        <div className="progress progress-thin" style={{ marginTop: 8 }}>
          <div className="progress-fill" style={{ width: '25%' }} />
        </div>
      </div>

      {/* card area — full bleed */}
      <div className="fl-col center" style={{ flex: 1, padding: '40px 28px', justifyContent: 'center' }}>
        <div className="flashcard" style={{ width: '100%', minHeight: 420, padding: '36px 28px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="wf-handwritten" style={{ fontSize: 14, color: 'var(--ink-faint)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: 2 }}>
            front
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.4, color: 'var(--ink)' }}>
            What is the mechanism of action of <span className="wf-handwritten accent" style={{ fontSize: 30, fontWeight: 700 }}>β-blockers</span> in heart failure?
          </div>
          <hr className="muted-line" style={{ margin: '28px 60px' }} />
          <div className="imgph" style={{ height: 130, margin: '0 40px' }}>
            [ image · cardiac receptor diagram ]
          </div>
        </div>

        <button className="btn btn-ghost" style={{ marginTop: 28, padding: '12px 28px', fontSize: 16, borderRadius: 999 }}>
          tap to reveal answer
        </button>
        <span className="wf-mono" style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 6 }}>
          space ⎵
        </span>
      </div>

      <Note style={{ top: 60, right: 10, transform: 'rotate(3deg)' }} arrow="↗">
        only counter +<br />hairline progress.<br />no chrome.
      </Note>
      <Note style={{ bottom: 130, left: 8 }} arrow="↘">
        rating buttons appear<br />only after reveal —<br />card commands the screen
      </Note>
    </div>
  );
}

Object.assign(window, { StudyA });
