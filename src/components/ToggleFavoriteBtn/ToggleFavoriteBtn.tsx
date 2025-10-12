import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { FC } from 'react';
import {
	addToFavorites,
	getFavorites,
	removeFromFavorites,
} from '../../api/user';
import { cn } from '../../utils';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface Props {
	id: string;
}

export const ToggleFavoriteBtn: FC<Props> = ({ id }) => {
	const queryClient = useQueryClient();

	const { data: favorites } = useQuery({
		queryKey: ['favorites'],
		queryFn: () => getFavorites(),
		retry: 0,
	});

	const addMutation = useMutation({
		mutationFn: () => addToFavorites(id.toString()),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['favorites'] });
		},
	});

	const removeMutation = useMutation({
		mutationFn: () => removeFromFavorites(id.toString()),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['favorites'] });
		},
	});
	const isFavorite = favorites?.some((movie) => movie.id === Number(id));

	const handleClick = () => {
		if (isFavorite) {
			removeMutation.mutate();
		} else {
			addMutation.mutate();
		}
	};

	return (
		<Button
			variant="icon"
			onClick={() => handleClick()}>
			<Icon
				name={isFavorite ? 'favoriteFill' : 'favorite'}
				className={cn('fill-white', isFavorite && 'fill-btn-primary')}></Icon>
		</Button>
	);
};
