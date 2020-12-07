import * as React from 'react';
import { FunctionComponent } from 'react';

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

		targetElement?.addEventListener(
			'contextmenu',
			(e) => {
				e.preventDefault();
				setState('show');
			},
			false
		);
	}, [target]);

	if (state === 'show') {
		return (
			<ul>
				<li>list one</li>
				<li>list two</li>
				<li>list three</li>
			</ul>
		);
	}

	return null;
};
