// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  ComponentPlayground,
  Deck,
  Heading,
  ListItem,
  Image,
  List,
  Quote,
  Slide,
  Fill,
  Fit,
  Text,
  Table,
  TableHeaderItem,
  TableRow,
  TableItem,
  Layout
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  backgroundPic: require("../assets/backgroundPic-A2A-TL.png"),
  backgroundPic50: require("../assets/backgroundPic-A2A-TL50.png"),
  backgroundPicA2A: require("../assets/backgroundPicA2A.png"),
  brach: require("../assets/Brach.gif"),
  taylor: require("../assets/Taylor.gif"),
  michael: require("../assets/Michael.gif"),
  jamie: require("../assets/Jamie.gif"),
  cathy: require("../assets/Cathy.gif"),
  dpl: require("../assets/DPL.png"),
  model: require("../assets/Model.png"),
  A2AlogoWh: require("../assets/A2A-white.png"),
  sports: require("../assets/sports.png"),
  ruby: require("../assets/1-ruby-on-rails.png"),
  rubygems: require("../assets/1-rubygems.png"),
  htmlcss: require("../assets/1-html5css3.png"),
  javascript: require("../assets/1-javascript.png"),
  redux: require("../assets/1-redux.png"),
  react: require("../assets/1-react.png"),
  A2Afirst: require("../assets/1A2A.png"),
  Login: require("../assets/2Login.gif"),
  Bio: require("../assets/3Taylor.png"),
  SportsPage: require("../assets/4Sports.png"),
  Favs: require("../assets/5Favs.png"),
  FavsX2: require("../assets/6FavsX2.png"),
  FavsX1: require("../assets/7FavsX1.png"),
  Friends: require("../assets/8Friends.png"),
  Post: require("../assets/9Post.png"),
  Posts: require("../assets/10Posts.png"),
  MapCloseup: require("../assets/11MapCloseup.png"),
  Chat: require("../assets/12Chat.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Rock Salt",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide id="Title" transition={["fade", "fade"]} transitionDuration={500} bgImage={images.backgroundPic.replace("/", "")} >
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Athlete to Athlete
          </Heading>
          <br />
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Connect and Exercise Together!
          </Text>
        </Slide>

        <Slide id="Problem" transition={["fade", "fade"]} bgColor="black" bgImage={images.backgroundPicA2A.replace("/", "")}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            The Problem
          </Heading>
          <List>
            <ListItem textColor="primary">"I want to play ball now!"</ListItem>
            <ListItem textColor="primary">"I've made 10 calls ..."</ListItem>
            <ListItem textColor="primary">"... can't find anyone to play."</ListItem>
            <ListItem textColor="primary">"Social media for sports?"</ListItem>
            <ListItem textColor="primary">"Let's build one!"</ListItem>
          </List>
        </Slide>

        <Slide id="Technologies" transition={["fade", "fade"]} bgColor="black" bgImage={images.backgroundPicA2A.replace("/", "")}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Technologies
          </Heading>
          <Layout align="flex-start center">
            <Fill>
              <Table margin="0px 0px">
                <TableRow>
                  <TableItem>
                    <Image src={images.ruby.replace("/", "")} margin="80px 20px 0px 20px" height="250px"/>
                  </TableItem>
                  <TableItem>
                    <Image src={images.rubygems.replace("/", "")} margin="80px 20px 0px 20px" height="250px"/>
                  </TableItem>
                  <TableItem>
                    <Image src={images.htmlcss.replace("/", "")} margin="80px 20px 0px 20px" height="250px"/>
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Image src={images.react.replace("/", "")} margin="20px 20px 0px 20px" height="250px"/>
                  </TableItem>
                  <TableItem>
                    <Image src={images.javascript.replace("/", "")} margin="20px 20px 0px 0px" height="250px"/>
                  </TableItem>
                  <TableItem>
                    <Image src={images.redux.replace("/", "")} margin="20px 20px 0px 0px" height="250px"/>
                  </TableItem>
                </TableRow>
              </Table>
            </Fill>
          </Layout>
        </Slide>

        <Slide id="Challenges" transition={["fade", "fade"]} bgColor="black" bgImage={images.backgroundPicA2A.replace("/", "")}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Challenges
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary" nowrap>Building confident expertise</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" nowrap>Login bug --> Lost time</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" nowrap>Agreein on "The Dream" vs. MVP</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" nowrap>What? Only four weeks?</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" nowrap>Thank God! Only four weeks!</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide align="flex-start center" id="Model" transition={["fade", "fade"]} bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Athlete to Athlete Model
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.model.replace("/", "")} center margin="50px 0px" height="600px"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide id="A2A" transition={["fade", "fade"]} bgColor="black" bgImage={images.A2Afirst.replace("/", "")}>
        </Slide>

        <Slide id="Login" transition={["fade", "fade"]} bgColor="black" bgImage={images.Login.replace("/", "")}>
        </Slide>

        <Slide id="Bio" transition={["fade", "fade"]} bgColor="black" bgImage={images.Bio.replace("/", "")}>
        </Slide>

        <Slide id="Sports" transition={["fade", "fade"]} bgColor="black" bgImage={images.SportsPage.replace("/", "")}>
        </Slide>

        <Slide id="Favs" transition={["fade", "fade"]} bgColor="black" bgImage={images.Favs.replace("/", "")}>
        </Slide>

        <Slide id="FavsX2" transition={["fade", "fade"]} bgColor="black" bgImage={images.FavsX2.replace("/", "")}>
        </Slide>

        <Slide id="FavsX1" transition={["fade", "fade"]} bgColor="black" bgImage={images.FavsX1.replace("/", "")}>
        </Slide>

        <Slide id="Post" transition={["fade", "fade"]} bgColor="black" bgImage={images.Post.replace("/", "")}>
        </Slide>

        <Slide id="Posts" transition={["fade", "fade"]} bgColor="black" bgImage={images.Posts.replace("/", "")}>
        </Slide>

        <Slide id="Map" transition={["fade", "fade"]} bgColor="black" bgImage={images.MapCloseup.replace("/", "")}>
        </Slide>

        <Slide id="Chat" transition={["fade", "fade"]} bgColor="black" bgImage={images.Chat.replace("/", "")}>
        </Slide>

        <Slide id="Friends" transition={["fade", "fade"]} bgColor="black" bgImage={images.Friends.replace("/", "")}>
        </Slide>

        <Slide id="Team" transition={["fade", "fade"]} bgImage={images.backgroundPic50.replace("/", "")}>
          <Heading margin="0px -50px" size={1} fit textColor="secondary">
          <Image src={images.dpl.replace("/", "")} height="30px" margin="0px 10px 0px 0px" />
          Our Team
          </Heading>
          <Layout align="flex-start center">
            <Fill>
              <Table margin="0px -100px">
                <TableRow>
                  <TableItem>
                    <Image src={images.taylor.replace("/", "")} margin="80px 20px 0px 0px" height="200px"/>
                  </TableItem>
                  <TableItem>
                    <Image src={images.brach.replace("/", "")} margin="80px 20px 0px 20px" height="200px"/>
                  </TableItem>
                  <TableItem>
                    <Image src={images.jamie.replace("/", "")} margin="80px 20px 0px 20px" height="200px"/>
                  </TableItem>
                  <TableItem>
                    <Image src={images.michael.replace("/", "")} margin="80px 20px 0px 20px" height="200px"/>
                  </TableItem>
                  <TableItem>
                    <Image src={images.cathy.replace("/", "")} margin="80px 0px 0px 20px" height="200px"/>
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Taylor</TableItem>
                  <TableItem>Brach</TableItem>
                  <TableItem>Jamie</TableItem>
                  <TableItem>Michael</TableItem>
                  <TableItem>Cathy</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem><Text textSize="0.5em">Idea & Friends</Text></TableItem>
                  <TableItem><Text textSize="0.5em">Bios & Photos</Text></TableItem>
                  <TableItem><Text textSize="0.5em">Posts to Sports</Text></TableItem>
                  <TableItem><Text textSize="0.5em">Chat for Posts</Text></TableItem>
                  <TableItem><Text textSize="0.5em">Sports & Spectacle</Text></TableItem>
                </TableRow>
              </Table>
            </Fill>
          </Layout>
        </Slide>

      </Deck>
    );
  }
}
