import * as React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Main from '../../components/Main';

const Container = styled(Main)`
  display: flex;
`;

type HomeScreenProps = {};

function HomeScreen(props: HomeScreenProps) {
  return (
    <Container>
      <Link to="/posts">Go to job board…</Link>
    </Container>
  );
}

export default HomeScreen;
