import { type FC, type SVGProps } from 'react';
import type { IconType } from '../../types';

import {
	BackIcon,
	BurgerIcon,
	CheckIcon,
	CopyrightIcon,
	CrossLargeIcon,
	CrossSmallIcon,
	FavoriteFillIcon,
	FavoriteIcon,
	GenresIcon,
	KeyIcon,
	LineIcon,
	MailIcon,
	OkIcon,
	ReloadIcon,
	SearchIcon,
	StarIcon,
	TgIcon,
	UserFillIcon,
	UserIcon,
	VKIcon,
	YoutubeIcon,
} from './icons';

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconType;
}

const config = {
	back: BackIcon,
	burger: BurgerIcon,
	check: CheckIcon,
	copyright: CopyrightIcon,
	crossLarge: CrossLargeIcon,
	crossSmall: CrossSmallIcon,
	favoriteFill: FavoriteFillIcon,
	favorite: FavoriteIcon,
	genres: GenresIcon,
	key: KeyIcon,
	line: LineIcon,
	mail: MailIcon,
	ok: OkIcon,
	reload: ReloadIcon,
	search: SearchIcon,
	star: StarIcon,
	tg: TgIcon,
	userFill: UserFillIcon,
	user: UserIcon,
	vk: VKIcon,
	yt: YoutubeIcon,
};

export const Icon: FC<IconProps> = ({ name, ...props }) => {
	const SVGIcon = config[name];
	return <SVGIcon {...props} />;
};
