import { useEffect, useRef, useState } from "react";
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import React from 'react';

const Review = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  const [localReviews, setLocalReviews] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [movieId]);

  useEffect(() => {
    if (reviews) {
      setLocalReviews(reviews);
    }
  }, [reviews]);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current.value;

    try {
      await api.post("/api/v1/reviews", {
        reviewBody: rev,
        imdbId: movieId,
      });

      const updatedReviews = [...localReviews, { body: rev }];
      setLocalReviews(updatedReviews);
      revText.current.value = "";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col><h3>Reviews</h3></Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm
                  handleSubmit={addReview}
                  revText={revText}
                  labelText="Write a Review?"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            {localReviews?.map((r, index) => (
              <Row key={index}>
                <Col>{r.body}</Col>
              </Row>
            ))}
          </>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
