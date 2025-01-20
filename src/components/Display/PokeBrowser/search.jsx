import { useGetPokemonList } from "../../WebServices";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

export default function Search({ setPokemonIndex = () => {} }) {
  const { pokemonList, loading } = useGetPokemonList();
  const [inputValue, setInputValue] = useState();
  return (
    <div>
      {loading ? (
        <>loading ... </>
      ) : (
        <div>
          <Autocomplete
            disablePortal
            size="small"
            options={pokemonList}
            sx={{ width: 300, backgroundColor: "white" }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              let pokemonIndex = pokemonList.findIndex(
                (n) => n === newInputValue
              );
              setInputValue(undefined);
              setPokemonIndex(pokemonIndex);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search Pokemon" />
            )}
          />
        </div>
      )}
    </div>
  );
}
