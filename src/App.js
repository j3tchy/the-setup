import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Spinner, Intent, Elevation } from '@blueprintjs/core';

import StyledCards from './components/styled/Card';

const Wrapper = styled.div`
  margin: 20px auto;
  width: 350px;
`;

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      {loading && <Spinner intent={Intent.PRIMARY} />}
      {photos &&
        photos.map((photo) => (
          <StyledCards key={photo.id} elevation={Elevation.ONE}>
            <p>{photo.title}</p>
          </StyledCards>
        ))}
    </Wrapper>
  );
};

export default App;
