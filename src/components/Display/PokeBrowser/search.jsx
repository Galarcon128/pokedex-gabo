import { useGetPokemonList } from "../../WebServices";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

export default function Search({ setPokemonIndex = () => {} }) {
  const { pokemonList, loading } = useGetPokemonList();
  return (
    <div>
      {loading ? (
        <>loading ... </>
      ) : (
        <Autocomplete
          disablePortal
          size="small"
          options={pokemonList}
          sx={{ width: 300, backgroundColor: "white" }}
          inputValue=""
          onInputChange={(event, newInputValue) => {
            let pokemonIndex = pokemonList.findIndex(
              (n) => n === newInputValue
            );
            setPokemonIndex(pokemonIndex + 1);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Search Pokemon" />
          )}
        />
      )}
    </div>
  );
}
