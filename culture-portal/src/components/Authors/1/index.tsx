import React from 'react';
import PropTypes from 'prop-types';

import Foto from '../../OverlayFoto';
import Video from '../../OverlayVideo';
import YandexMap from '../YandexMap/YandexMap';

const Author = ({ data }: { data: any }): JSX.Element  => {
  console.log(data);
  return (
    <>
      <div> Some info about author {data.nameAuthor}</div>
      <Foto data={data} />
      <Video data={data} />
      <YandexMap coordinates={data.map.coordinates} />
    </>
  )
};

Author.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Author;
