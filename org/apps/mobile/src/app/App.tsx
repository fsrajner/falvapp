/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { useGetFilteredPostsQuery } from '../api/axios-client/AppControllerQuery';
// import { AppControllerQuery } from '../api/axios-client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Test from './Test';


export const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} >
      <Test />
    </QueryClientProvider>
  );
};

export default App;
