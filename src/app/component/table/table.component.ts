import { Component, OnInit } from '@angular/core';


//import { xml2json } from 'xml-js';
//import './xml2json';
import { convertableToString, Parser } from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-table',
    templateUrl:'./table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    title = 'read-xml-angular8';
    public xmlItems: any;
    constructor(private _http: HttpClient) { this.loadXML(); }
    ngOnInit() {
        
    }
    loadXML() {
        this._http.get('/assets/MiningList.xml',
        {
            headers: new HttpHeaders()
            .set('Content-Type', 'text/xml')
            .append('Access-Control-Allow-Methods', 'GET')
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
            responseType: 'text'
        })
        .subscribe((data) => {
            this.parseXML(data)
          .then((data) => {
            console.log(data);
            this.xmlItems = data;
          });
      });
  }

  parseXML(data: convertableToString) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [{
            code: 'PDT052',
            coin_count: '0.00024300',
            usd: '4.66635815',
            prod_type: '메인',
            date: '2020-12-04 03:00:00'
          },
          {
            code: 'PDT012',
            coin_count: '0.00024300',
            usd: '4.66635815',
            prod_type: '메인',
            date: '2020-12-04 03:00:00'
          }],
        parser = new Parser({
            trim: true,
            explicitArray: true
        });
      parser.parseString(data, function (err: any, result: { MiningData: any; }) {
        var obj = result.MiningData;
        for (k in obj.mining) {
          var item = obj.mining[k];
          arr.push({
            code: item.code[0],
            coin_count: item.coin_count[0],
            usd: item.usd[0],
            prod_type: item.prod_type[0],
            date: item.date[0]
          });
        }
        resolve(arr);
      });
    });
  }
  
}
       
      
       

       //var result1 = xml2json(xml, {compact: true, spaces: 4, trim:false, ignoreDeclaration:true,  ignoreCdata: true, textFn: removeJsonTextAttribute,ignoreAttributes: true, ignoreInstruction: true, ignoreComment : true, alwaysChildren : true});
        //var result2 = xml2json(xml, {compact: false, spaces: 4});
        //console.log(result1);
