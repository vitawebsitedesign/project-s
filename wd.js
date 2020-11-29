const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const urls = {
    uberEats: 'https://www.ubereats.com/au/'
};

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.manage().setTimeouts({ implicit: 10000, pageLoad: 10000 });

driver.get(urls.uberEats).then(function(){
driver.findElement(webdriver.By.css('#location-typeahead-home-input')).sendKeys('23 brighton st petersham\n').then(function(){
    driver.findElement(webdriver.By.css('#location-typeahead-home-item-0')).click().then(function() {
        driver.findElement(webdriver.By.xpath('//button[text()="Show more"]')).click().then(function() {
            const restaurants = driver.findElements(webdriver.By.css('figure a'));

            webdriver.promise.map(restaurants, r => r.click())
                .then(function(values) {
                    //const price = driver.findElement(webdriver.By.css('.cv.cb.e3.bc')).getText();
                    //console.log(price);
                });

            //console.log(restaurants);
            //console.log(JSON.stringify(restaurants));

            /* restaurants.get(0).click().then(function() {
                const price = driver.findElement(webdriver.By.css('.cv.cb.e3.bc')).getText();
                console.log(price);
            });
            */
    
            //driver.findElement(webdriver.By.css('figure a')).click();  
        });
    });
    //driver.findElement(webdriver.By.css('.cv.cb.cc.ba.j7.bj.al.d0.d1.d2.cl.cm.f4.bc.af.jl')).click();
    //driver.findElement(webdriver.By.css('.cq.cr.cc.bc.c5.be.bj.rb.rc.k9.rd.re.rf.rg')).click();

    /* driver.getTitle().then(function(title) {
      console.log(title)
      if(title === 'webdriver - Google Search') {
         console.log('Test passed');
      } else {
         console.log('Test failed');
      }
     driver.quit();
    });
    */
  });
});