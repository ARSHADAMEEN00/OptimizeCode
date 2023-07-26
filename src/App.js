import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Introduction from "./Introduction";
import RenderingLargeLists from "./Tricks/Trick2/RenderingLargeLists";
import LazyLoadingImages from "./Tricks/Trick3/LazyLoadingImages";
import ImportCost from "./Tricks/Trick4/ImportCost";
import UseRefNew from "./Tricks/Trick1/UseRefNew";
import CodeSplitting from "./Tricks/Trick5/CodeSplitting";
import AvoidUsingInlineStyles from "./Tricks/Trick6/AvoidUsingInlineStyles";

import store from "./server/store/store";

import "./App.css";
import DependencyOptimization from "./Tricks/Trick7/DependencyOptimization";
import MemoizeStore from "./Tricks/Trick8/MemoizeStore";
import Parent from "./Tricks/Trick9/Parent";
import SimpleLayout from "./Common/SimpleLayout";

//  Lazy loading
const UseRef = lazy(() => import("./Tricks/Trick1/UseRef"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<SimpleLayout />}>
              <Route index element={<Introduction />} />
              <Route path="useRef" element={<UseRef />} />
              <Route path="useRef/v1" element={<UseRefNew />} />
              <Route path="childProps" element={<Parent />} />

              <Route
                path="renderingLargeLists"
                element={<RenderingLargeLists />}
              />
              <Route path="lazyLoadingImages" element={<LazyLoadingImages />} />
              <Route path="codeSplitting" element={<CodeSplitting />} />
              <Route path="importCost" element={<ImportCost />} />
              <Route
                path="avoidUsingInlineStyles"
                element={<AvoidUsingInlineStyles />}
              />
              <Route
                path="dependencyOptimization"
                element={<DependencyOptimization />}
              />
              <Route path="memoizeStore" element={<MemoizeStore />} />

              <Route path="*" element={"404"} />
            </Route>
          </Routes>
        </Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
