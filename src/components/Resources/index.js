import ResourceCard from '../ResourceCard';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Header from '../Header';
import Box from '@mui/material/Box';

function Resources({ header }) {
  const [data, setData] = useState([
    { resourceid: 0, userid: 0, topicid: 0, link: '', tags: [], rating: 0 },
  ]);
  //state for the topic dropdown
  const [topicChoice, setTopicChoice] = useState('');
  //state changing to the topicChoice after being clicked
  const [confirmedTopic, setConfirmedTopic] = useState('');
  // Need to figure out if we can use and where to place below variable
  // let resourceID = getTopicById(Math.floor(Math.random() * 5));
  useEffect(() => {
    // function to fetch the data from the database initially
    async function Fetch() {
      let math = Math.floor(Math.random() * 2) + 1;
      let response = await fetch(`http://localhost:3001/resource/${math}`);
      let json = await response.json();
      let dataArr = json.data;

      setData(dataArr);
    }
    Fetch();
  }, []);

  //use effect that fetches a fresh batch of resources by topic when topic is selected and confirmed
  useEffect(() => {
    // function to fetch the data from the database
    async function Fetch() {
      let response = await fetch(
        `http://localhost:3001/resource/${confirmedTopic}`
      );
      let json = await response.json();
      let dataArr = json.data;
      setData([...dataArr]);
    }
    Fetch();
  }, [confirmedTopic]);

  //___________Functions and the list of options for dropdown Container! ADD OBJECT TO THE LIST TO ADD A NEW OPTION, DON'T MODIFY THE JSX____________

  //function changing the state
  function topicChangeHandler(event) {
    setTopicChoice(event.target.value);
  }

  //list of topic options
  const topicOptions = [
    { label: 'HTML', value: 1 },
    { label: 'CSS', value: 2 },
    { label: 'JAVASCRIPT', value: 3 },
    { label: 'EXPRESS', value: 4 },
  ];

  //___________Function serving the search button for topics__________
  function searchButtonHandler() {
    setConfirmedTopic(topicChoice);
  }

  return (
    <>
      {header && <Header></Header>}
      <dl className="resourcesContainer">
        {/*create a form for input box of topics (dropdown) and a submit (search) button. DIV CONTAINER FOR CSS PURPOSES*/}
        <div className="rectangleHeader">
          <div
            style={{
              alignSelf: 'center',
              marginRight: '4rem',
              marginLeft: '2rem',
            }}
          >
            <h1 id="resources-heading">Resources</h1>
          </div>
          <Box
            id="dropdown-menu-cont"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
              <InputLabel sx={{ alignItems: 'center' }} id="topic-label">
                Topic
              </InputLabel>
              <Select
                variant="standard"
                sx={{ backgroundColor: 'white' }}
                value={topicChoice}
                onChange={topicChangeHandler}
              >
                {topicOptions.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              id="topic-filter-butt"
              onClick={searchButtonHandler}
            >
              Search
            </Button>
          </Box>
        </div>{' '}
        <section className="allCards">
          {data.map((item, index) => {
            return (
              <ResourceCard
                key={index}
                logo={item.picture}
                userid={item.userid}
                topicid={item.topicid}
                link={item.link}
                tags={item.tags}
                rating={item.rating}
              ></ResourceCard>
            );
          })}
        </section>
      </dl>
    </>
  );
}

export default Resources;
