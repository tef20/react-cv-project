import React from "react";
import Section from "./Section";
import Entry from "./Entry";

export default function Profile() {
  const content = (
    <Entry
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\
         incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque\
          gravida in fermentum et. Ut morbi tincidunt augue interdum velit euismod in\
           pellentesque massa. Dignissim enim sit amet venenatis. Mi quis hendrerit dolor\
            magna eget est lorem. Nam aliquam sem et tortor consequat id. Ac placerat\
             vestibulum lectus mauris ultrices eros in cursus. Duis at consectetur lorem\
              donec massa sapien. lorem20"
      }
    />
  );
  return <Section title='Profile' content={content} />;
}
