import { BasePage } from "./basePage";
import {By} from 'selenium-webdriver'

export class Sport extends BasePage {


whatsNewBtn: By = By.xpath('////*[@id="ui-id-3"]/span'
    );
    
womenbBtn: By = By.xpath('//div[@id="ui-id-4"]'
    );

menBtn: By = By.xpath('//*[@id="ui-id-5"]'
    );
    
   
gearBtn: By = By.xpath('//*[@id="ui-id-6"]/span[2]'
    );

subBtn: By = By.xpath( "/form[@id=newsletter-validate-detail]/div[2]/button/span"
  );
searchBtn: any  = By.xpath('/html[1]/body[1]/div[2]/header[1]/div[2]/div[2]/div[2]/form[1]/div[1]/div[1]/input[1]');

constructor() {
    super({url: 'https://magento.softwaretestingboard.com/'})
}
}