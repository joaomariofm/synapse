// Synapse — Study session wireframes
// A: sparse / immersive  ·  B: packed / control-heavy

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

function StudyB() {
  return (
    <div className="wf">
      <StatusBar />

      {/* breadcrumb + toolbar */}
      <div style={{ padding: '10px 18px 6px' }}>
        <div className="fl between center">
          <div className="fl center gap-6">
            <div className="ico"><I.back /></div>
            <span className="wf-mono" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>
              Medicine :: Cardiology :: <span style={{ color: 'var(--ink)' }}>Pharmacology</span>
            </span>
          </div>
          <div className="fl gap-12 center">
            <div className="ico"><I.edit /></div>
            <div className="ico"><I.flag /></div>
            <div className="ico"><I.pause /></div>
            <div className="ico"><I.more /></div>
          </div>
        </div>

        {/* progress + counts */}
        <div className="fl center gap-10" style={{ marginTop: 10 }}>
          <div className="progress" style={{ flex: 1 }}>
            <div className="progress-fill" style={{ width: '25%' }} />
          </div>
          <span className="wf-mono" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>12/47</span>
        </div>
        <div className="fl gap-6 wrap" style={{ marginTop: 8 }}>
          <span className="chip"><span className="due-pill new" style={{ border: 0, padding: 0 }}>new</span> 4</span>
          <span className="chip"><span className="due-pill learn" style={{ border: 0, padding: 0 }}>learn</span> 3</span>
          <span className="chip"><span className="due-pill due" style={{ border: 0, padding: 0 }}>review</span> 5</span>
          <span className="chip" style={{ marginLeft: 'auto' }}>⏱ 4:21</span>
        </div>
      </div>

      {/* card */}
      <div style={{ padding: '12px 18px', flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <div className="flashcard" style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="fl between center">
            <span className="chip chip-tag">#cardio</span>
            <span className="wf-mono" style={{ fontSize: 10, color: 'var(--ink-faint)' }}>note · cloze · card 2/3</span>
          </div>
          <div style={{ fontSize: 19, lineHeight: 1.45 }}>
            In heart failure, <span className="cloze-revealed">β-blockers</span> reduce mortality by inhibiting <span className="cloze-blank">_____________</span> receptor activation, slowing remodeling and lowering myocardial O₂ demand.
          </div>
          <div className="imgph" style={{ height: 110 }}>
            [ image occlusion · masks: 2 ]
          </div>
          <div className="fl gap-4 wrap" style={{ marginTop: 'auto' }}>
            <span className="chip chip-tag">#anking::step1::pharm</span>
            <span className="chip chip-tag">#high-yield</span>
          </div>
        </div>
      </div>

      {/* rating row */}
      <div style={{ padding: '8px 18px 14px' }}>
        <div className="rating-row">
          <div className="rating again">
            <span className="lbl">Again</span>
            <span className="ivl">&lt; 1m</span>
            <span className="kbd">1</span>
          </div>
          <div className="rating hard">
            <span className="lbl">Hard</span>
            <span className="ivl">6m</span>
            <span className="kbd">2</span>
          </div>
          <div className="rating good">
            <span className="lbl">Good</span>
            <span className="ivl">2d</span>
            <span className="kbd">3</span>
          </div>
          <div className="rating easy">
            <span className="lbl">Easy</span>
            <span className="ivl">4d</span>
            <span className="kbd">4</span>
          </div>
        </div>
        <div className="wf-handwritten" style={{ textAlign: 'center', marginTop: 6, fontSize: 13, color: 'var(--ink-faint)' }}>
          FSRS · stab 3.2d · diff 6.4
        </div>
      </div>

      <Note style={{ top: 36, right: 8, transform: 'rotate(-2deg)' }} arrow="↑">
        breadcrumb +<br />edit/flag/suspend<br />always reachable
      </Note>
      <Note style={{ top: 280, left: 6, transform: 'rotate(-4deg)' }} arrow="→">
        cloze rendered<br />w/ tags + image-occ<br />badge
      </Note>
      <Note style={{ bottom: 110, right: 10, transform: 'rotate(3deg)' }} arrow="↓">
        next-interval<br />preview on every<br />button
      </Note>
    </div>
  );
}

Object.assign(window, { StudyA, StudyB });
