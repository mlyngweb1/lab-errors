'use strict';
import logger from "../utils/logger.js";

const about = {
  aboutView(request, response) {
    logger.info("About page loading!");
    response.send('About the Playlist app');   
  },
};

export default about;