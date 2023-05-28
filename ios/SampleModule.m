//
//  SampleModule.m
//  randomCardBattle
//
//  Created by N-312 on 2023/05/28.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
@interface RCT_EXTERN_MODULE(SampleModule, NSObject)
RCT_EXTERN_METHOD(sampleCall: (NSString *)name resolver: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject)
@end
