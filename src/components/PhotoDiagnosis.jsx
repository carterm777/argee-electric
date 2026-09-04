import { Camera, Trash2, Send, Lock, CircleCheckBig, Phone, ImagePlus } from 'lucide-react'
import { usePhotoDiagnosis } from '../lib/usePhotoDiagnosis.js'
import { BIZ, REASSURE } from '../data.js'
import './photo-diagnosis.css'

/* The signature element. A carbon-copy job ticket: white top sheet, printed
   form rhythm, ruled fields, and a rubber-stamp success state (site-specific
   motion technique #2, "Stamp Impression"). */
export default function PhotoDiagnosis() {
  const d = usePhotoDiagnosis()
  const done = d.status === 'done'

  return (
    <div className="tik" data-state={d.status}>
      <span className="tik__carbon" aria-hidden="true" />

      <div className="tik__sheet grain">
        <span className="tik__perf" aria-hidden="true" />

        <div className="tik__head">
          <div className="tik__headMain">
            <span className="tik__form">Form 12</span>
            <h2 className="tik__title">Photo Diagnosis</h2>
          </div>
          <span className="tik__no" aria-hidden="true">
            No.<b>0119</b>
          </span>
        </div>

        <p className="tik__lede">
          Send a photo of the panel, the fixture, or whatever is misbehaving. You get a
          straight answer back about what it is and what it takes to fix it.
        </p>

        {done ? (
          <div className="tik__done" role="status">
            <span className="tik__stamp" aria-hidden="true">
              <span className="tik__stampInner">
                <b>Received</b>
                <i>Argee Electric &middot; Red Deer AB</i>
              </span>
            </span>
            <div className="tik__doneBody">
              <CircleCheckBig className="tik__doneIcon" aria-hidden="true" />
              <h3 className="tik__doneTitle">That Is on the Board</h3>
              <p>
                Thanks{d.fields.name ? `, ${d.fields.name.split(' ')[0]}` : ''} — your
                ticket is logged. Someone from the shop will look at the photo and get back
                to you at {d.fields.phone || 'the number you left'}, usually the same day.
              </p>
              <p className="tik__doneNote">
                This is a demo form, so nothing was actually sent. On the live site it lands
                in the shop inbox.
              </p>
              <div className="tik__doneActions">
                <a className="btn btn--primary btn--sm" href={BIZ.tel}>
                  <Phone aria-hidden="true" />
                  Call the Shop Instead
                </a>
                <button type="button" className="tik__reset tlink" onClick={d.reset}>
                  Send another photo
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form className="tik__form-el" onSubmit={d.submit} noValidate>
            {/* Field 1 — the photo */}
            <div className="tik__field">
              <span className="tik__fieldNo" aria-hidden="true">01</span>
              <label className="tik__label" htmlFor="pd-file">Photo of the Problem</label>
              <div
                className="tik__drop"
                data-drag={d.dragging ? 'true' : 'false'}
                data-has={d.preview ? 'true' : 'false'}
                {...d.dropProps}
              >
                {d.preview ? (
                  <>
                    <img className="tik__thumb" src={d.preview} alt="The photo you selected, ready to send." />
                    <div className="tik__dropMeta">
                      <span className="tik__fileName">{d.file?.name}</span>
                      <span className="stencil">Attached</span>
                    </div>
                    <button type="button" className="tik__clear" onClick={d.clearPhoto}>
                      <Trash2 aria-hidden="true" />
                      <span className="sr-only">Remove the attached photo</span>
                    </button>
                  </>
                ) : (
                  <button type="button" className="tik__dropBtn" onClick={d.openPicker}>
                    <span className="tik__dropIcon" aria-hidden="true">
                      <Camera />
                    </span>
                    <span className="tik__dropText">
                      <b>Add a Photo</b>
                      <i>Straight from your phone, or drop one here</i>
                    </span>
                    <ImagePlus className="tik__dropPlus" aria-hidden="true" />
                  </button>
                )}
                <input
                  ref={d.inputRef}
                  id="pd-file"
                  className="sr-only"
                  type="file"
                  accept={d.accepted}
                  onChange={d.onFileInput}
                />
              </div>
              {d.errors.file && <p className="tik__err">{d.errors.file}</p>}
            </div>

            {/* Field 2 — the description */}
            <div className="tik__field">
              <span className="tik__fieldNo" aria-hidden="true">02</span>
              <label className="tik__label" htmlFor="pd-desc">What Is It Doing</label>
              <textarea
                id="pd-desc"
                className="tik__ruled"
                rows={2}
                placeholder="Breaker trips when the shop heater runs…"
                value={d.fields.description}
                onChange={d.setField('description')}
                aria-invalid={d.errors.description ? 'true' : undefined}
              />
              {d.errors.description && <p className="tik__err">{d.errors.description}</p>}
            </div>

            {/* Field 3 — who to call back */}
            <div className="tik__field tik__field--split">
              <span className="tik__fieldNo" aria-hidden="true">03</span>
              <div className="tik__col">
                <label className="tik__label" htmlFor="pd-name">Name</label>
                <input
                  id="pd-name"
                  className="tik__line"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={d.fields.name}
                  onChange={d.setField('name')}
                  aria-invalid={d.errors.name ? 'true' : undefined}
                />
                {d.errors.name && <p className="tik__err">{d.errors.name}</p>}
              </div>
              <div className="tik__col">
                <label className="tik__label" htmlFor="pd-phone">Phone</label>
                <input
                  id="pd-phone"
                  className="tik__line"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(403) 000-0000"
                  value={d.fields.phone}
                  onChange={d.setField('phone')}
                  aria-invalid={d.errors.phone ? 'true' : undefined}
                />
                {d.errors.phone && <p className="tik__err">{d.errors.phone}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--wide tik__submit"
              disabled={d.status === 'sending'}
            >
              <Send aria-hidden="true" />
              {d.status === 'sending' ? 'Sending…' : 'Send It to the Shop'}
            </button>

            <p className="reassure tik__reassure">
              <Lock aria-hidden="true" />
              <span>{REASSURE}</span>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
