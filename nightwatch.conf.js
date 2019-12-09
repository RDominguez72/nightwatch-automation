module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    
        "src_folders" : ["tests"],
        "page_objects_path" : ["page-objects"],

        "webdriver" : {
            "start_process": true,
            "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
            "host": "localhost",
            "port": 9515
        },
      
        "test_settings" : {
          "default" : {
            "desiredCapabilities": {
              "browserName": "chrome"
            }
          }
        }
      }