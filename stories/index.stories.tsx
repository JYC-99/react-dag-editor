import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ReactDagEditor } from "../src";

storiesOf("Flow", module)
  .add("ReactDagEditor", () => {
    return (
      <ReactDagEditor />
    );
  });