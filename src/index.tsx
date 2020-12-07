import * as React from 'react';
import { FunctionComponent } from 'react';
import ClickAwayListener from 'react-click-away-listener';

interface MenuItems {
	name: string;
}
interface ContextMenuProps {
	target: string;
	menuItems: MenuItems[];
}

type MenuState = 'show' | 'hide';

export const ContextMenu: FunctionComponent<ContextMenuProps> = ({
	target
}) => {
	const [state, setState] = React.useState<MenuState>('hide');

	React.useEffect(() => {
		const targetElement = document.querySelector(target);
		const handler = (e: Event) => {
			e.preventDefault();
			setState('show');
		};

		targetElement?.addEventListener('contextmenu', handler, false);

		return () => targetElement?.addEventListener('contextmenu', handler);
	}, [target]);

	const handleClickAway = () => setState('hide');

	if (state === 'show') {
		return (
			<ClickAwayListener onClickAway={handleClickAway}>
				<ul>
					<li>list one</li>
					<li>list two</li>
					<li>list three</li>
					<li>list four</li>
				</ul>
			</ClickAwayListener>
		);
	}

	return null;
};
