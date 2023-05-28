//
//  SampleModule.swift
//  randomCardBattle
//
//  Created by N-312 on 2023/05/28.
//

import Foundation

@objc(SampleModule)
class SampleModule: NSObject{
  @objc
  func sampleCall(_ name: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock){
    print("asdf \(name)")
    let abc = Int(name)!
    var isFail = false
    if(abc % 2 == 0){
      isFail = true
    }
    let eventId = 123;
    DispatchQueue.main.async {
      if(isFail){
        reject("Sampl1","Sampl2", nil)
      } else {
        resolve(eventId)
      }
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
      return true
  }
}
