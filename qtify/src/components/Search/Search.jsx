// import React from "react";
// import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// import {useAutocomplete} from "@mui/base";
// import { styled } from "@mui/system";
// import { truncate } from "../../helpers/helpers";
// import { useNavigate } from "react-router-dom";
// import { Tooltip } from "@mui/material";



// const Listbox = styled("ul")(({ theme }) => ({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: "0px 0px 10px 10px",
//   border: "1px solid var(--color-primary)",
//   top: 60,
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: "var(--color-black)",
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));

// function Search({ searchData, placeholder }) {
//   const {
//     getRootProps,
//     getInputLabelProps,
//     value,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//   } = useAutocomplete({
//     id: "use-autocomplete-demo",
//     options: searchData || [],
//     getOptionLabel: (option) => option.title,
//   });

//   const navigate = useNavigate();
//   const onSubmit = (e, value) => {
//     e.preventDefault();
//     console.log(value);
//     navigate(`/album/${value.slug}`);
//     //Process form data, call API, set state etc.
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <form
//         className={styles.wrapper}
//         onSubmit={(e) => {
//           onSubmit(e, value);
//         }}
//       >
//         <div {...getRootProps()}>
//           <input
//             name="album"
//             className={styles.search}
//             placeholder={placeholder}
//             required
//             {...getInputProps()}
//           />
//         </div>
//         <div>
//           <button className={styles.searchButton} type="submit">
//             <SearchIcon />
//           </button>
//         </div>
//       </form>
//       {groupedOptions.length > 0 ? (
//         <Listbox {...getListboxProps()}>
//           {groupedOptions.map((option, index) => {
//             // console.log(option);
//             const artists = option.songs.reduce((accumulator, currentValue) => {
//               accumulator.push(...currentValue.artists);
//               return accumulator;
//             }, []);

//             return (
//               <li
//                 className={styles.listElement}
//                 {...getOptionProps({ option, index })}
//               >
//                 <div>
//                   <p className={styles.albumTitle}>{option.title}</p>

//                   <p className={styles.albumArtists}>
//                     {truncate(artists.join(", "), 40)}
//                   </p>
//                 </div>
//               </li>
//             );
//           })}
//         </Listbox>
//       ) : null}
//     </div>
//   );
// }

// export default Search;
// import React, { useState } from "react";
// import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// import { styled } from "@mui/system";
// import { truncate } from "../../helpers/helpers";
// import { useNavigate } from "react-router-dom";
// import { Tooltip } from "@mui/material";

// const Listbox = styled("ul")(({ theme }) => ({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: "0px 0px 10px 10px",
//   border: "1px solid var(--color-primary)",
//   top: 60,
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: "var(--color-black)",
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));

// // Custom `useAutocomplete` Hook Implementation
// function useAutocomplete({ id, options, getOptionLabel }) {
//   const [inputValue, setInputValue] = useState("");
//   const [focusedIndex, setFocusedIndex] = useState(-1);

//   const filteredOptions = options.filter((option) =>
//     getOptionLabel(option).toLowerCase().includes(inputValue.toLowerCase())
//   );

//   const getInputProps = () => ({
//     value: inputValue,
//     onChange: (e) => setInputValue(e.target.value),
//     onKeyDown: (e) => {
//       if (e.key === "ArrowDown") {
//         setFocusedIndex((prevIndex) =>
//           Math.min(prevIndex + 1, filteredOptions.length - 1)
//         );
//       } else if (e.key === "ArrowUp") {
//         setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//       } else if (e.key === "Enter" && focusedIndex >= 0) {
//         setInputValue(getOptionLabel(filteredOptions[focusedIndex]));
//         setFocusedIndex(-1);
//       }
//     },
//   });

//   const getOptionProps = ({ option, index }) => ({
//     onClick: () => setInputValue(getOptionLabel(option)),
//     "data-focused": focusedIndex === index,
//   });

//   return {
//     getInputProps,
//     groupedOptions: filteredOptions,
//     getOptionProps,
//     getListboxProps: () => ({}),
//     getRootProps: () => ({}),
//     value: inputValue,
//   };
// }

// function Search({ searchData, placeholder }) {
//   const {
//     getRootProps,
//     getInputProps,
//     value,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//   } = useAutocomplete({
//     id: "use-autocomplete-demo",
//     options: searchData || [],
//     getOptionLabel: (option) => option.title,
//   });

//   const navigate = useNavigate();
//   const onSubmit = (e, value) => {
//     e.preventDefault();
//     navigate(`/album/${value.slug}`);
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <form
//         className={styles.wrapper}
//         onSubmit={(e) => {
//           onSubmit(e, value);
//         }}
//       >
//         <div {...getRootProps()}>
//           <input
//             name="album"
//             className={styles.search}
//             placeholder={placeholder}
//             required
//             {...getInputProps()}
//           />
//         </div>
//         <div>
//           <button className={styles.searchButton} type="submit">
//             <SearchIcon />
//           </button>
//         </div>
//       </form>
//       {groupedOptions.length > 0 ? (
//         <Listbox {...getListboxProps()}>
//           {groupedOptions.map((option, index) => {
//             const artists = option.songs.reduce((accumulator, currentValue) => {
//               accumulator.push(...currentValue.artists);
//               return accumulator;
//             }, []);

//             return (
//               <li
//                 className={styles.listElement}
//                 {...getOptionProps({ option, index })}
//               >
//                 <div>
//                   <p className={styles.albumTitle}>{option.title}</p>
//                   <p className={styles.albumArtists}>
//                     {truncate(artists.join(", "), 40)}
//                   </p>
//                 </div>
//               </li>
//             );
//           })}
//         </Listbox>
//       ) : null}
//     </div>
//   );
// }

// export default Search;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";

const Listbox = styled("ul")(() => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  backgroundColor: "var(--color-black)",
  listStyle: "none",
  "& li:hover": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
}));

function useAutocomplete({ options, getOptionLabel }) {
  const [inputValue, setInputValue] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const filteredOptions = options.filter((option) =>
    getOptionLabel(option).toLowerCase().includes(inputValue.toLowerCase())
  );

  const getInputProps = () => ({
    value: inputValue,
    onChange: (e) => setInputValue(e.target.value),
    onKeyDown: (e) => {
      if (e.key === "ArrowDown") {
        setFocusedIndex((prevIndex) =>
          Math.min(prevIndex + 1, filteredOptions.length - 1)
        );
      } else if (e.key === "ArrowUp") {
        setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (e.key === "Enter" && focusedIndex >= 0) {
        setInputValue(getOptionLabel(filteredOptions[focusedIndex]));
        setFocusedIndex(-1);
      }
    },
  });

  const getOptionProps = ({ option, index }) => ({
    onClick: () => setInputValue(getOptionLabel(option)),
    "data-focused": focusedIndex === index,
  });

  return {
    getInputProps,
    groupedOptions: filteredOptions,
    getOptionProps,
    getListboxProps: () => ({}),
    getRootProps: () => ({}),
    value: inputValue,
  };
}

function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    getInputProps,
    value,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown visibility
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const selectedOption = searchData.find(
        (option) => option.title.toLowerCase() === value.toLowerCase()
      );
      if (selectedOption) {
        navigate(`/album/${selectedOption.slug}`);
      }
    }
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = (event) => {
    // Prevent hiding dropdown when interacting with options
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  return (
    <div style={{ position: "relative" }} onBlur={handleBlur}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
            onFocus={handleFocus} // Show dropdown on focus
          />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {showDropdown && groupedOptions.length > 0 && ( // Show dropdown only while typing or focused
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const artists = option.songs?.reduce((acc, curr) => {
              acc.push(...curr.artists);
              return acc;
            }, []);

            return (
              <li
                key={index}
                className={styles.listElement}
                {...getOptionProps({ option, index })}
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>
                  <p className={styles.albumArtists}>
                    {truncate(artists?.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          })}
        </Listbox>
      )}
    </div>
  );
}

export default Search;
