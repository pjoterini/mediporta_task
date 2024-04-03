import { useEffect } from 'react';
import { fetchTags, fetchTagCount } from '../infrastracture';
import { FetchTagsPayload } from '../types';
import { RootState, useAppDispatch, useAppSelector } from '../../../store';

export const useTagsData = () => {
  const tagCount = useAppSelector((state: RootState) => state.tags.count);
  const tags = useAppSelector((state: RootState) => state.tags.data);
  const status = useAppSelector((state: RootState) => state.tags.status);
  const error = useAppSelector((state: RootState) => state.tags.error);

  const dispatch = useAppDispatch();

  const fetchTagsData = (payload: FetchTagsPayload) => {
    dispatch(fetchTags(payload));
  };

  useEffect(() => {
    dispatch(fetchTagCount());
  }, []);

  return { tagCount, tags, status, error, fetchTagsData };
};
