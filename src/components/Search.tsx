import React, { useEffect, useState } from "react";
import { ISingleBeer } from "../models/ISingleBeer";
import { BeersService } from "../services/BeersService";

interface IState {
  term: string;
  singleBeer: ISingleBeer;
  errorMsg: string;
}

export default function Search() {
  const [state, setState] = useState<IState>({
    term: "trashyblonde",
    singleBeer: {} as ISingleBeer,
    errorMsg: "",
  });

  const { term, singleBeer } = state;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      term: e.target.value,
    });
  };

  const handleSearchSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    BeersService.getSearchedBeer(term)
      .then((res) => {
        setState({
          ...state,
          term: "",
          singleBeer: res.data,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          errorMsg: err.message,
        });
      });
  }, [state.term]);

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input
          required={true}
          type="text"
          name="term"
          value={state.term}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
