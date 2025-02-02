import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import classNames from 'classnames';
import style from './textTrack.module.css';

function TextTracksIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			viewBox="0 0 24 24"
			width="24"
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z" />
		</svg>
	);
}

export default function TextTrackButton({ textTracks = [], onChange }) {
	const [open, setOpen] = useState(false);
	const onRadioChange = useCallback(
		(evt) => {
			onChange(evt.target.value);
			evt.stopPropagation();
		},
		[onChange]
	);
	return (
		<div
			class={style.container}
			onClick={useCallback(() => setOpen(!open), [open])}
		>
			<TextTracksIcon />
			<ul class={classNames(style.list, { [style.open]: open })}>
				{textTracks.map((textTrack) => (
					<li>
						<label>
							<input
								type="radio"
								name="audioTrack"
								value={textTrack.id}
								checked={textTrack.enabled}
								onClick={onRadioChange}
							/>
							<span>{textTrack.label}</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}
