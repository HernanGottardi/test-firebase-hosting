import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from 'recoil';
import {Route, Routes} from "react-router-dom";
import { Layout } from "./components/layout";
import {SearchResults} from "./pages/searchResults";
import {Home} from "./pages/Home";
import {SearchItem} from "./pages/searchItem";

const rootEl = createRoot(document.querySelector(".root"))

function App() {
  return (
    <Suspense fallback={"Cargando..."}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="search/:query" element={<SearchResults />} />
              <Route path="item/:id" element={<SearchItem />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </Suspense>
  );
}

rootEl.render(<App />);

