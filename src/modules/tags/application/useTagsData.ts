import { useEffect } from 'react';
import { fetchTags, fetchTagsCount } from '../infrastracture/';
import { FetchTagsPayload } from '../types';
import { RootState, useAppDispatch, useAppSelector } from '../../../store';

export const useTagsData = () => {
  const tagsCount = useAppSelector((state: RootState) => state.tags.tagsCount);
  const tags = useAppSelector((state: RootState) => state.tags.tags);
  const status = useAppSelector((state: RootState) => state.tags.status);
  const error = useAppSelector((state: RootState) => state.tags.error);

  const dispatch = useAppDispatch();

  const fetchTagsData = (payload: FetchTagsPayload) => {
    dispatch(fetchTags(payload));
  };

  useEffect(() => {
    dispatch(fetchTagsCount);
  }, []);

  return { tagsCount, tags, status, error, fetchTagsData };
};
