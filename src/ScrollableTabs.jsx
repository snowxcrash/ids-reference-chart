import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TableCoreProfiles from './TableCoreProfiles.jsx'
import TableCoreSources from './TableCoreSources.jsx'
import TableDisruption from './TableDisruption.jsx'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     maxWidth: { xs: 320, sm: 480 },
    //     bgcolor: 'background.paper',
    //   }}
    // >
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label="core_profiles" />
          <Tab label="core_sources" />
          <Tab label="disruption" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <TableCoreProfiles />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TableCoreSources />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TableDisruption />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Four
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Item Five
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          Item Six
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          Item Seven
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

