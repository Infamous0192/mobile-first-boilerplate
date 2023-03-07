import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';

import { logout, useCreds } from '../api';
import { AuthContext } from '../contexts';

interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useCreds();

  const logoutMutation = useMutation(logout, {
    onSuccess: () => {
      queryClient.clear();
    },
  });

  const value = useMemo(
    () => ({
      creds: data?.creds,
      isLoading,
      logout: logoutMutation.mutateAsync,
    }),
    [data, logoutMutation.mutateAsync, isLoading]
  );

  // TODO make loading spinner
  if (isLoading || logoutMutation.isLoading) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
