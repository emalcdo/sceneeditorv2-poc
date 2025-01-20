import React, { FormEvent, useState } from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';

const sampleScene = {
  "id": 4741,
  "name": "Scene SOS Fisheye 1",
  "description": "SOS Fisheye 1",
  "network_id": 14,
  "feeder_id": 8333,
  "date_created": "2024-11-29T05:13:22.264Z",
  "assigned_to": null,
  "created_by": null,
  "is_active": true,
  "points": null,
  "site_id": 912,
  "feeder": {
      "id": 8333,
      "name": "SOS Fisheye 1",
      "camera": {
          "Name": "SOS Fisheye 1"
      },
      "device": {
          "id": null,
          "name": null,
          "status": "inactive",
          "is_active": null,
          "is_paired": null,
          "description": null,
          "identity_id": null,
          "iothub_device_id": null,
          "last_active_timestamp": null
      },
      "status": "online",
      "usecase": "ze",
      "identity": {
          "id": 2,
          "name": "edgeless"
      },
      "is_active": true,
      "description": "",
      "feeder_apps": [
          {
              "id": 6250,
              "app_id": 208,
              "app_code": "sos",
              "feeder_id": 8333
          },
          {
              "id": 6267,
              "app_id": 145,
              "app_code": "ze",
              "feeder_id": 8333
          }
      ],
      "feeder_asset": [
          {
              "id": 10840,
              "asset": "https://viana2.blob.core.windows.net/staging/flatten-images/flatten/flatten-1732857392523-axis_snapshot_1732857204811_62547.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=M0xm%2BS5FQv%2FFJsGmrzoMOlSr%2FMSKnavtICugC16%2B7xM%3D",
              "config": {
                  "k1": 0.285,
                  "k2": 0.004,
                  "k3": -0.002,
                  "k4": 0.006,
                  "vendor": "axis"
              },
              "feeder_id": 8333
          }
      ]
  },
  "regions": [
      {
          "id": 8849,
          "name": "ZONE A",
          "description": null,
          "network_id": 14,
          "scene_id": 4741,
          "features": {
              "type": 4,
              "sort_order": 3
          },
          "points": [
              [
                  98.13850135323145,
                  251.9772332042429
              ],
              [
                  218.9428973678972,
                  251.0127270484372
              ],
              [
                  215.32599928362575,
                  142.02353144239146
              ],
              [
                  100.79089328169715,
                  142.02353144239146
              ]
          ],
          "color_hm": "",
          "contact_threshold": "1000",
          "cleanuptime_threshold": "300",
          "cleanuptime_unit_threshold": null,
          "proximity_threshold": "100",
          "date_created": "2025-01-17T07:47:18.853",
          "assigned_to": null,
          "created_by": 1144,
          "is_active": true,
          "preset_id": null,
          "sla_time": "300",
          "sla_time_unit": "min",
          "doorway_id": null,
          "location_id": null,
          "app": "ze",
          "usecase": "ze",
          "app_id": 145,
          "usecase_id": 71,
          "is_global": false,
          "region_group_id": null,
          "region_global_id": null,
          "visibility_status": null,
          "planogram_id": null,
          "facing_id": null,
          "main_scene_id": null,
          "tags": [],
          "global_scenes": [],
          "products": [],
          "destination_id": null
      },
      {
          "id": 8841,
          "name": "HOP_ZONE",
          "description": null,
          "network_id": 14,
          "scene_id": 4741,
          "features": {
              "type": 4,
              "sort_order": 1
          },
          "points": [
              [
                  99.82638712589146,
                  162.03703417536002
              ],
              [
                  187.59644730421147,
                  159.62576878584574
              ],
              [
                  187.35532076526005,
                  248.36033511997147
              ],
              [
                  99.10300750903716,
                  250.77160050948575
              ]
          ],
          "color_hm": "",
          "contact_threshold": "1000",
          "cleanuptime_threshold": "300",
          "cleanuptime_unit_threshold": null,
          "proximity_threshold": "100",
          "date_created": "2024-11-29T07:34:16.633",
          "assigned_to": null,
          "created_by": 1144,
          "is_active": true,
          "preset_id": null,
          "sla_time": "300",
          "sla_time_unit": "min",
          "doorway_id": null,
          "location_id": null,
          "app": "sos",
          "usecase": "sos",
          "app_id": 208,
          "usecase_id": 82,
          "is_global": false,
          "region_group_id": null,
          "region_global_id": null,
          "visibility_status": null,
          "planogram_id": null,
          "facing_id": null,
          "main_scene_id": null,
          "tags": [],
          "global_scenes": [],
          "products": [],
          "destination_id": null
      },
      {
          "id": 8842,
          "name": "HOP",
          "description": null,
          "network_id": 14,
          "scene_id": 4741,
          "features": {
              "type": 6,
              "sort_order": null
          },
          "points": [
              [
                  118.39313062515146,
                  187.1141942263086
              ],
              [
                  177.22800612930004,
                  186.63194114840576
              ],
              [
                  176.2634999734943,
                  238.2330204840115
              ],
              [
                  117.91087754724859,
                  239.1975266398172
              ]
          ],
          "color_hm": null,
          "contact_threshold": null,
          "cleanuptime_threshold": null,
          "cleanuptime_unit_threshold": null,
          "proximity_threshold": "200",
          "date_created": "2024-11-29T07:39:57.251",
          "assigned_to": null,
          "created_by": 1144,
          "is_active": true,
          "preset_id": null,
          "sla_time": null,
          "sla_time_unit": null,
          "doorway_id": null,
          "location_id": null,
          "app": "sos",
          "usecase": "sos",
          "app_id": 208,
          "usecase_id": 82,
          "is_global": false,
          "region_group_id": null,
          "region_global_id": null,
          "visibility_status": null,
          "planogram_id": null,
          "facing_id": null,
          "main_scene_id": null,
          "tags": [],
          "global_scenes": [],
          "products": [],
          "destination_id": 195
      }
  ],
  "status": "active",
  "status_id": 1
};

const sampleFeeders = [
  {
    "id": 8347,
    "vendor": "others",
    "name": "C920test",
    "description": null,
    "location_id": 980,
    "camera": {
      "id": 8347,
      "_id": "0e7bc01e-ecf8-4eb2-868d-8c1829d91591",
      "bus": "usb0000001401",
      "fps": 24,
      "apps": [
        "am"
      ],
      "card": "HD Pro Webcam C920",
      "coef": 170,
      "name": "C920test",
      "type": 0,
      "uuid": "0e7bc01e-ecf8-4eb2-868d-8c1829d91591",
      "index": 0,
      "width": 2304,
      "height": 1536,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "usb",
      "raw_source": 0,
      "rtsp_source": "rtsp://mediamtx-w9j2e9:18554/0e7bc01e-ecf8-4eb2-868d-8c1829d91591",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-12-13T09:48:57.104Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2024-12-13T11:06:35.000Z",
    "device_id": 1750,
    "device_name": "nuc03-NUC11PAHi7",
    "location": {
      "id": 980,
      "name": "Area",
      "site_id": 580
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6266,
        "feeder_id": 8347,
        "app_id": 1,
        "config": null,
        "date_created": "2024-12-13T09:48:57.11957",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6266,
        "feeder_id": 8347,
        "app_id": 1,
        "config": null,
        "date_created": "2024-12-13T09:48:57.11957",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 8340,
    "vendor": "others",
    "name": "Testc920",
    "description": null,
    "location_id": 980,
    "camera": {
      "id": 8340,
      "_id": "c00b2cbc-e7f0-42fd-ade2-c9106a2a0924",
      "bus": "\\\\?\\usb#vid_046d&pid_0892&mi_00#6&a798880&0&0000#{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global",
      "fps": 24,
      "apps": [
        "am"
      ],
      "card": "HD Pro Webcam C920",
      "coef": 170,
      "name": "Testc920",
      "type": 0,
      "uuid": "c00b2cbc-e7f0-42fd-ade2-c9106a2a0924",
      "index": 0,
      "width": 2304,
      "height": 1536,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "usb",
      "raw_source": 0,
      "rtsp_source": "rtsp://localhost:18554/c00b2cbc-e7f0-42fd-ade2-c9106a2a0924",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-12-10T03:08:02.318Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2024-12-10T03:19:50.000Z",
    "device_id": 1747,
    "device_name": "DESKTOP-C87CIMT",
    "location": {
      "id": 980,
      "name": "Area",
      "site_id": 580
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6259,
        "feeder_id": 8340,
        "app_id": 1,
        "config": null,
        "date_created": "2024-12-10T03:08:02.334577",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6259,
        "feeder_id": 8340,
        "app_id": 1,
        "config": null,
        "date_created": "2024-12-10T03:08:02.334577",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 8333,
    "vendor": "axis",
    "name": "SOS Fisheye 1",
    "description": "",
    "location_id": 1140,
    "camera": {
      "name": "SOS Fisheye 1",
      "width": 1080,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-11-29T05:13:17.101Z",
    "usecase_id": 71,
    "network_id": 14,
    "is_active": true,
    "serial_id": "B8A44F9E4347",
    "api_key": "",
    "status": "online",
    "device_model": "M4318-PLVE",
    "created_by": 0,
    "last_active_timestamp_v2": "2025-01-20T06:34:13.197Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "keith+viana_admin_superuser@meldcx.com",
    "disconnect_flag": true,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 819,
        "name": "fisheye"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6250,
        "feeder_id": 8333,
        "app_id": 208,
        "config": null,
        "date_created": "2024-11-29T05:14:21.260017",
        "app": {
          "id": 208,
          "name": "Speed Of Service",
          "description": "SOS",
          "code": "sos",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "scene": true,
            "events": [
              {
                "send": "sos_event",
                "catch": "sos_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SoS",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6267,
        "feeder_id": 8333,
        "app_id": 145,
        "config": null,
        "date_created": "2025-01-17T07:43:51.692677",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6250,
        "feeder_id": 8333,
        "app_id": 208,
        "config": null,
        "date_created": "2024-11-29T05:14:21.260017",
        "app": {
          "id": 208,
          "name": "Speed Of Service",
          "description": "SOS",
          "code": "sos",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "scene": true,
            "events": [
              {
                "send": "sos_event",
                "catch": "sos_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SoS",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6267,
        "feeder_id": 8333,
        "app_id": 145,
        "config": null,
        "date_created": "2025-01-17T07:43:51.692677",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/flatten-images/flatten/flatten-1732857392523-axis_snapshot_1732857204811_62547.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=M0xm%2BS5FQv%2FFJsGmrzoMOlSr%2FMSKnavtICugC16%2B7xM%3D",
        "feeder_id": 8333,
        "status": "Completed",
        "id": 10840
      }
    ]
  },
  {
    "id": 8332,
    "vendor": "axis",
    "name": "SOS Fisheye 2",
    "description": "",
    "location_id": 1140,
    "camera": {
      "name": "SOS Fisheye 2",
      "width": 1080,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-11-29T05:13:11.394Z",
    "usecase_id": 71,
    "network_id": 14,
    "is_active": true,
    "serial_id": "B8A44F974491",
    "api_key": "",
    "status": "offline",
    "device_model": "M4318-PLVE",
    "created_by": 0,
    "last_active_timestamp_v2": "2025-01-20T06:33:35.400Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "keith+viana_admin_superuser@meldcx.com",
    "disconnect_flag": true,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 819,
        "name": "fisheye"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6251,
        "feeder_id": 8332,
        "app_id": 208,
        "config": null,
        "date_created": "2024-11-29T05:14:43.276389",
        "app": {
          "id": 208,
          "name": "Speed Of Service",
          "description": "SOS",
          "code": "sos",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "scene": true,
            "events": [
              {
                "send": "sos_event",
                "catch": "sos_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SoS",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6268,
        "feeder_id": 8332,
        "app_id": 145,
        "config": null,
        "date_created": "2025-01-17T07:43:56.304709",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6251,
        "feeder_id": 8332,
        "app_id": 208,
        "config": null,
        "date_created": "2024-11-29T05:14:43.276389",
        "app": {
          "id": 208,
          "name": "Speed Of Service",
          "description": "SOS",
          "code": "sos",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "scene": true,
            "events": [
              {
                "send": "sos_event",
                "catch": "sos_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SoS",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6268,
        "feeder_id": 8332,
        "app_id": 145,
        "config": null,
        "date_created": "2025-01-17T07:43:56.304709",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/flatten-images/flatten/flatten-1732857400669-axis_snapshot_1732857198439_23150.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=3BI2KDZJxXh378A34ZNWXncZ9C1NMEuNNEEdjjRINng%3D",
        "feeder_id": 8332,
        "status": "Completed",
        "id": 10841
      }
    ]
  },
  {
    "id": 8331,
    "vendor": "axis",
    "name": "SOS Angled 1",
    "description": "",
    "location_id": 1140,
    "camera": {
      "name": "SOS Angled 1",
      "width": 1920,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-11-29T05:12:50.230Z",
    "usecase_id": 82,
    "network_id": 14,
    "is_active": true,
    "serial_id": "B8A44F70F36C",
    "api_key": "",
    "status": "online",
    "device_model": "P3265-LVE",
    "created_by": 0,
    "last_active_timestamp_v2": "2025-01-20T06:34:07.558Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "keith+viana_admin_superuser@meldcx.com",
    "disconnect_flag": true,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 661,
        "name": "tracker_only"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6252,
        "feeder_id": 8331,
        "app_id": 208,
        "config": null,
        "date_created": "2024-11-29T05:15:07.337907",
        "app": {
          "id": 208,
          "name": "Speed Of Service",
          "description": "SOS",
          "code": "sos",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "scene": true,
            "events": [
              {
                "send": "sos_event",
                "catch": "sos_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SoS",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6252,
        "feeder_id": 8331,
        "app_id": 208,
        "config": null,
        "date_created": "2024-11-29T05:15:07.337907",
        "app": {
          "id": 208,
          "name": "Speed Of Service",
          "description": "SOS",
          "code": "sos",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/sos.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=W4opwvMh65u2Uu%2FgufM%2FrYkOqaN8TiIql3b3kmfLhws%3D",
            "scene": true,
            "events": [
              {
                "send": "sos_event",
                "catch": "sos_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SoS",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/axis_snapshot_1732857177111_38442.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=NW3tZbcs9Z10gVfxfXx8YyIdXhQphM9St9N0AsMIQh4%3D",
        "feeder_id": 8331,
        "status": "Completed",
        "id": 10835
      }
    ]
  },
  {
    "id": 8328,
    "vendor": "axis",
    "name": "Axis PC Angled",
    "description": "",
    "location_id": 1140,
    "camera": {
      "name": "Axis PC Angled",
      "width": 1920,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-11-25T07:32:54.940Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": "B8A44F93F556",
    "api_key": "",
    "status": "offline",
    "device_model": "Q3538-LVE",
    "created_by": 0,
    "last_active_timestamp_v2": "2024-11-29T05:47:36.308Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "yves@meldcx.com",
    "disconnect_flag": true,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6247,
        "feeder_id": 8328,
        "app_id": 7,
        "config": null,
        "date_created": "2024-11-25T08:42:11.250806",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6247,
        "feeder_id": 8328,
        "app_id": 7,
        "config": null,
        "date_created": "2024-11-25T08:42:11.250806",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/axis_snapshot_1732524674651_81131.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Xyg91jgaO%2FHR7jRZCY8baxXDrZJyrQedN6FwYrWtv9k%3D",
        "feeder_id": 8328,
        "status": "Completed",
        "id": 10827
      }
    ]
  },
  {
    "id": 8315,
    "vendor": null,
    "name": "OAKD USB TEST ubuntu 2204",
    "description": null,
    "location_id": 980,
    "camera": {
      "id": 8315,
      "_id": "735ad1b5-1662-4683-bafd-30a8f9895f4e",
      "bus": "194430106103A22E00",
      "fps": -1,
      "apps": [
        "am-oakd-usb"
      ],
      "card": "3.1",
      "coef": 170,
      "name": "OAKD USB TEST ubuntu 2204",
      "type": 0,
      "uuid": "735ad1b5-1662-4683-bafd-30a8f9895f4e",
      "width": 1920,
      "height": 1080,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "oakd-usb",
      "raw_source": "194430106103A22E00",
      "rtsp_source": "rtsp://mediamtx-f2n8l7:18554/735ad1b5-1662-4683-bafd-30a8f9895f4e",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-11-14T01:32:25.333Z",
    "usecase_id": 83,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1799,
    "last_active_timestamp_v2": "2024-11-18T10:13:22.000Z",
    "device_id": 1744,
    "device_name": "marc-NUC11PAHi5",
    "location": {
      "id": 980,
      "name": "Area",
      "site_id": 580
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6234,
        "feeder_id": 8315,
        "app_id": 210,
        "config": null,
        "date_created": "2024-11-14T01:32:25.361363",
        "app": {
          "id": 210,
          "name": "Audience Measurement - Oak-D",
          "description": "Anonymously detect people - converting human data to metric data",
          "code": "am-oakd-usb",
          "source": "https://viana.blob.core.windows.net/bin/amv2/dev/am.7z",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-aam-oak-d.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=hOZtCWB88ycoY2CPpVUepp7yJ4TtUL5s3c%2FRsZpXnMg%3D",
            "type": "edge",
            "cover": "https://viana.blob.core.windows.net/production/asset-serviceapplets/covers/am.png",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2024-03-25T03:28:29.256"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6234,
        "feeder_id": 8315,
        "app_id": 210,
        "config": null,
        "date_created": "2024-11-14T01:32:25.361363",
        "app": {
          "id": 210,
          "name": "Audience Measurement - Oak-D",
          "description": "Anonymously detect people - converting human data to metric data",
          "code": "am-oakd-usb",
          "source": "https://viana.blob.core.windows.net/bin/amv2/dev/am.7z",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-aam-oak-d.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=hOZtCWB88ycoY2CPpVUepp7yJ4TtUL5s3c%2FRsZpXnMg%3D",
            "type": "edge",
            "cover": "https://viana.blob.core.windows.net/production/asset-serviceapplets/covers/am.png",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2024-03-25T03:28:29.256"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 8314,
    "vendor": null,
    "name": "oakd-usb",
    "description": null,
    "location_id": 980,
    "camera": {
      "id": 8314,
      "_id": "ac133f5f-5a34-41d5-b01b-bfc58c1cb2e0",
      "bus": "19443010D18D9A2E00",
      "fps": -1,
      "apps": [
        "am-oakd-usb"
      ],
      "card": "3.3",
      "coef": 170,
      "name": "oakd-usb",
      "type": 0,
      "uuid": "ac133f5f-5a34-41d5-b01b-bfc58c1cb2e0",
      "width": 1920,
      "height": 1080,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "oakd-usb",
      "raw_source": "19443010D18D9A2E00",
      "rtsp_source": "rtsp://mediamtx-t2u8k2:18554/ac133f5f-5a34-41d5-b01b-bfc58c1cb2e0",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-11-13T10:16:05.356Z",
    "usecase_id": 83,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2024-11-18T06:59:14.000Z",
    "device_id": 1742,
    "device_name": "ubuntu03nuc-NUC11PAHi7",
    "location": {
      "id": 980,
      "name": "Area",
      "site_id": 580
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6233,
        "feeder_id": 8314,
        "app_id": 210,
        "config": null,
        "date_created": "2024-11-13T10:16:05.368117",
        "app": {
          "id": 210,
          "name": "Audience Measurement - Oak-D",
          "description": "Anonymously detect people - converting human data to metric data",
          "code": "am-oakd-usb",
          "source": "https://viana.blob.core.windows.net/bin/amv2/dev/am.7z",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-aam-oak-d.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=hOZtCWB88ycoY2CPpVUepp7yJ4TtUL5s3c%2FRsZpXnMg%3D",
            "type": "edge",
            "cover": "https://viana.blob.core.windows.net/production/asset-serviceapplets/covers/am.png",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2024-03-25T03:28:29.256"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6233,
        "feeder_id": 8314,
        "app_id": 210,
        "config": null,
        "date_created": "2024-11-13T10:16:05.368117",
        "app": {
          "id": 210,
          "name": "Audience Measurement - Oak-D",
          "description": "Anonymously detect people - converting human data to metric data",
          "code": "am-oakd-usb",
          "source": "https://viana.blob.core.windows.net/bin/amv2/dev/am.7z",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-aam-oak-d.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=hOZtCWB88ycoY2CPpVUepp7yJ4TtUL5s3c%2FRsZpXnMg%3D",
            "type": "edge",
            "cover": "https://viana.blob.core.windows.net/production/asset-serviceapplets/covers/am.png",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2024-03-25T03:28:29.256"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 8309,
    "vendor": "axis",
    "name": "Axis PC Fisheye",
    "description": "",
    "location_id": 1140,
    "camera": {
      "name": "Axis PC Fisheye",
      "width": 1080,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-11-06T08:58:22.610Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": "B8A44F973942",
    "api_key": "",
    "status": "offline",
    "device_model": "M4318-PLVE",
    "created_by": 0,
    "last_active_timestamp_v2": "2024-11-29T05:47:36.539Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "yves@meldcx.com",
    "disconnect_flag": true,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 819,
        "name": "fisheye"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6228,
        "feeder_id": 8309,
        "app_id": 7,
        "config": null,
        "date_created": "2024-11-06T08:59:00.197822",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6228,
        "feeder_id": 8309,
        "app_id": 7,
        "config": null,
        "date_created": "2024-11-06T08:59:00.197822",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/flatten-images/flatten/flatten-1732587386758-axis_snapshot_1732587386386_89475.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=KUuiOntgg4qGIuzV8C056z7nLuZfq%2FgbFnfq2RUG7go%3D",
        "feeder_id": 8309,
        "status": "Completed",
        "id": 10833
      }
    ]
  },
  {
    "id": 8308,
    "vendor": "meraki",
    "name": "Meraki Angled",
    "description": "",
    "location_id": 1140,
    "camera": {
      "width": 1920,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-10-29T06:07:07.082Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-MHPV-Q24X",
    "api_key": "",
    "status": "online",
    "device_model": "MV63",
    "created_by": 1796,
    "last_active_timestamp_v2": "2025-01-20T06:34:04.017Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "yves@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6226,
        "feeder_id": 8308,
        "app_id": 145,
        "config": null,
        "date_created": "2024-10-29T06:07:45.658985",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6227,
        "feeder_id": 8308,
        "app_id": 7,
        "config": null,
        "date_created": "2024-10-29T06:07:45.659272",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6226,
        "feeder_id": 8308,
        "app_id": 145,
        "config": null,
        "date_created": "2024-10-29T06:07:45.658985",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6227,
        "feeder_id": 8308,
        "app_id": 7,
        "config": null,
        "date_created": "2024-10-29T06:07:45.659272",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/staging/meraki/Q2UV-MHPV-Q24X/meraki_image_1730182027132-fb.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Wyppjuzm%2F%2BayIgf4NAP2%2BbqicPmesfR9AWoakr9ra4E%3D",
        "feeder_id": 8308,
        "status": "Completed",
        "id": 10754
      }
    ]
  },
  {
    "id": 8307,
    "vendor": "axis",
    "name": "AXIS PC Fisheye 1m",
    "description": null,
    "location_id": 481,
    "camera": {
      "name": "AXIS PC Fisheye 1m"
    },
    "date_created": "2024-10-29T05:18:56.323Z",
    "usecase_id": null,
    "network_id": 14,
    "is_active": true,
    "serial_id": "B8A44F95633C",
    "api_key": "",
    "status": "offline",
    "device_model": "M4318-PLVE",
    "created_by": 0,
    "last_active_timestamp_v2": "2024-10-29T05:51:51.467Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 481,
      "name": "Unallocated",
      "site_id": 507
    },
    "updated_by": null,
    "disconnect_flag": true,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [],
    "apps": [],
    "feeder_assets": null
  },
  {
    "id": 8302,
    "vendor": "rhombus",
    "name": "R3-24050255",
    "description": null,
    "location_id": 481,
    "camera": {
      "width": 2480,
      "height": 2480
    },
    "date_created": "2024-10-28T05:29:27.823Z",
    "usecase_id": null,
    "network_id": 14,
    "is_active": true,
    "serial_id": "R3-24050255",
    "api_key": "",
    "status": "online",
    "device_model": null,
    "created_by": 1794,
    "last_active_timestamp_v2": null,
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 481,
      "name": "Unallocated",
      "site_id": 507
    },
    "updated_by": "mary@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [],
    "apps": [],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/rhombus/nYP5Hkq4RQ2i1ZEM59C6vg/rhombus_image_1730093067862.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=9t8J6u%2BWxv120M8HOwtbMRecy3i2jqiW%2BgDVAL2jseY%3D",
        "feeder_id": 8302,
        "status": "Completed",
        "id": 10744
      }
    ]
  },
  {
    "id": 8282,
    "vendor": "meraki",
    "name": "L1-3 MV93 A",
    "description": "",
    "location_id": 1140,
    "camera": {
      "width": 1080,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-09-27T09:36:08.711Z",
    "usecase_id": 71,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2LW-32FQ-85Z3",
    "api_key": "",
    "status": "online",
    "device_model": "MV93",
    "created_by": 1768,
    "last_active_timestamp_v2": "2025-01-20T06:34:04.017Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "yves@skunkworks.ai",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 819,
        "name": "fisheye"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6211,
        "feeder_id": 8282,
        "app_id": 145,
        "config": null,
        "date_created": "2024-09-27T09:36:41.87327",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6211,
        "feeder_id": 8282,
        "app_id": 145,
        "config": null,
        "date_created": "2024-09-27T09:36:41.87327",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/flatten-1727429845487-meraki_image_1727429768750-fb.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1UFMSjxfMXH4wGOTEQ2MzxGItpKg%2F2x8IHOLipXtTAA%3D",
        "feeder_id": 8282,
        "status": "Completed",
        "id": 10670
      }
    ]
  },
  {
    "id": 8281,
    "vendor": "meraki",
    "name": "L1-3 MV93 B",
    "description": "",
    "location_id": 1140,
    "camera": {
      "width": 1080,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-09-27T09:36:08.699Z",
    "usecase_id": 71,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2LV-SLZS-FK4B",
    "api_key": "",
    "status": "online",
    "device_model": "MV93",
    "created_by": 1768,
    "last_active_timestamp_v2": "2025-01-20T06:34:04.017Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "yves@skunkworks.ai",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 819,
        "name": "fisheye"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6212,
        "feeder_id": 8281,
        "app_id": 145,
        "config": null,
        "date_created": "2024-09-27T09:37:04.827239",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6212,
        "feeder_id": 8281,
        "app_id": 145,
        "config": null,
        "date_created": "2024-09-27T09:37:04.827239",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/flatten-1727429895653-meraki_image_1727429768735-fb.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=S7%2Fa8ElvCvPM7shAEi%2BqN%2FmV4cf9ZPfxd0zwLZqYabE%3D",
        "feeder_id": 8281,
        "status": "Completed",
        "id": 10671
      }
    ]
  },
  {
    "id": 8280,
    "vendor": null,
    "name": "OAKDUSBW",
    "description": null,
    "location_id": 980,
    "camera": {
      "id": 8280,
      "_id": "bf24e0f2-6baa-4a61-bb01-769e4046f268",
      "bus": "19443010D18D9A2E00",
      "fps": -1,
      "apps": [
        "am-oakd-usb"
      ],
      "card": "1.2",
      "coef": 170,
      "name": "OAKDUSBW",
      "type": 0,
      "uuid": "bf24e0f2-6baa-4a61-bb01-769e4046f268",
      "width": 720,
      "height": 720,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "oakd-usb",
      "raw_source": "19443010D18D9A2E00",
      "rtsp_source": "rtsp://localhost:18554/bf24e0f2-6baa-4a61-bb01-769e4046f268",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-09-27T08:33:21.611Z",
    "usecase_id": 83,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2024-10-07T05:08:04.000Z",
    "device_id": 1734,
    "device_name": "DESKTOP-Q7SQ0V0",
    "location": {
      "id": 980,
      "name": "Area",
      "site_id": 580
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6207,
        "feeder_id": 8280,
        "app_id": 210,
        "config": null,
        "date_created": "2024-09-27T08:33:21.630362",
        "app": {
          "id": 210,
          "name": "Audience Measurement - Oak-D",
          "description": "Anonymously detect people - converting human data to metric data",
          "code": "am-oakd-usb",
          "source": "https://viana.blob.core.windows.net/bin/amv2/dev/am.7z",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-aam-oak-d.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=hOZtCWB88ycoY2CPpVUepp7yJ4TtUL5s3c%2FRsZpXnMg%3D",
            "type": "edge",
            "cover": "https://viana.blob.core.windows.net/production/asset-serviceapplets/covers/am.png",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2024-03-25T03:28:29.256"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6207,
        "feeder_id": 8280,
        "app_id": 210,
        "config": null,
        "date_created": "2024-09-27T08:33:21.630362",
        "app": {
          "id": 210,
          "name": "Audience Measurement - Oak-D",
          "description": "Anonymously detect people - converting human data to metric data",
          "code": "am-oakd-usb",
          "source": "https://viana.blob.core.windows.net/bin/amv2/dev/am.7z",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-aam-oak-d.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=hOZtCWB88ycoY2CPpVUepp7yJ4TtUL5s3c%2FRsZpXnMg%3D",
            "type": "edge",
            "cover": "https://viana.blob.core.windows.net/production/asset-serviceapplets/covers/am.png",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2024-03-25T03:28:29.256"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 8246,
    "vendor": "meraki",
    "name": "L1-2 MV93 B",
    "description": "",
    "location_id": 1140,
    "camera": {
      "width": 1080,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-09-17T03:29:54.883Z",
    "usecase_id": 71,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2LW-B668-HCC3",
    "api_key": "",
    "status": "online",
    "device_model": "MV93",
    "created_by": 1768,
    "last_active_timestamp_v2": "2025-01-20T06:34:04.017Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "yves@skunkworks.ai",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 819,
        "name": "fisheye"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6182,
        "feeder_id": 8246,
        "app_id": 7,
        "config": null,
        "date_created": "2024-09-17T03:34:05.312813",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6183,
        "feeder_id": 8246,
        "app_id": 145,
        "config": null,
        "date_created": "2024-09-17T03:34:05.315211",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6182,
        "feeder_id": 8246,
        "app_id": 7,
        "config": null,
        "date_created": "2024-09-17T03:34:05.312813",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6183,
        "feeder_id": 8246,
        "app_id": 145,
        "config": null,
        "date_created": "2024-09-17T03:34:05.315211",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/flatten-1726544077712-meraki_image_1726543794910.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=frPmhFufPDoGstm9sqHaEL94GUWOQixvX6g4rmC82Hk%3D",
        "feeder_id": 8246,
        "status": "Completed",
        "id": 10586
      }
    ]
  },
  {
    "id": 8244,
    "vendor": "meraki",
    "name": "Tram Test",
    "description": "",
    "location_id": 1373,
    "camera": {
      "width": 1920,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-09-17T03:00:28.710Z",
    "usecase_id": 3,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-B2T5-B9EB",
    "api_key": "",
    "status": "online",
    "device_model": "MV63",
    "created_by": 1020,
    "last_active_timestamp_v2": "2025-01-20T06:34:04.017Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1373,
      "name": "Diagonal",
      "site_id": 969
    },
    "updated_by": "mardy+staging@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6181,
        "feeder_id": 8244,
        "app_id": 9,
        "config": null,
        "date_created": "2024-09-17T03:01:08.527001",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6181,
        "feeder_id": 8244,
        "app_id": 9,
        "config": null,
        "date_created": "2024-09-17T03:01:08.527001",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/meraki/Q2UV-B2T5-B9EB/meraki_image_1726542028738.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=EgRWVoVhc9k0XPJoX%2FQyz0Pm5l1RRnzLPTpt%2BZ4H5YE%3D",
        "feeder_id": 8244,
        "status": "Completed",
        "id": 10583
      }
    ]
  },
  {
    "id": 8236,
    "vendor": null,
    "name": "OAKDtestADD",
    "description": null,
    "location_id": 980,
    "camera": {
      "id": 8236,
      "_id": "efd6723c-49bd-41f9-91d1-ca447710a572",
      "bus": "18443010C1E93F1300",
      "fps": -1,
      "apps": [
        "am"
      ],
      "card": "192.168.100.18",
      "coef": 170,
      "name": "OAKDtestADD",
      "type": 0,
      "uuid": "efd6723c-49bd-41f9-91d1-ca447710a572",
      "width": -1,
      "height": -1,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "oakd-poe",
      "raw_source": "18443010C1E93F1300",
      "rtsp_source": "rtsp://mediamtx-w9f3f1:18554/efd6723c-49bd-41f9-91d1-ca447710a572",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-09-06T09:36:18.216Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2024-09-11T03:07:46.000Z",
    "device_id": 1731,
    "device_name": "ubuntu03-NUC11PAHi7",
    "location": {
      "id": 980,
      "name": "Area",
      "site_id": 580
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6173,
        "feeder_id": 8236,
        "app_id": 1,
        "config": null,
        "date_created": "2024-09-06T09:36:18.23331",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6173,
        "feeder_id": 8236,
        "app_id": 1,
        "config": null,
        "date_created": "2024-09-06T09:36:18.23331",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ubuntu03-NUC11PAHi7-file-1725615583134-437878427.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=0%2BeWrSlabmyJ7cWtFbnG6xjc7mTcWyjKBG9LvfX%2BjWM%3D",
        "feeder_id": 8236,
        "status": "Completed",
        "id": 10567
      }
    ]
  },
  {
    "id": 8235,
    "vendor": null,
    "name": "ADDUSBC920",
    "description": null,
    "location_id": 980,
    "camera": {
      "id": 8235,
      "_id": "0ace07b3-23c9-4ba6-9d74-d65b49ba80a4",
      "bus": "usb0000001402",
      "fps": 24,
      "apps": [
        "am"
      ],
      "card": "HD Pro Webcam C920",
      "coef": 170,
      "name": "ADDUSBC920",
      "type": 0,
      "uuid": "0ace07b3-23c9-4ba6-9d74-d65b49ba80a4",
      "index": 0,
      "width": 2304,
      "height": 1536,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "usb",
      "raw_source": 0,
      "rtsp_source": "rtsp://mediamtx-w9f3f1:18554/0ace07b3-23c9-4ba6-9d74-d65b49ba80a4",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-09-06T09:24:15.944Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2024-09-11T03:07:46.000Z",
    "device_id": 1731,
    "device_name": "ubuntu03-NUC11PAHi7",
    "location": {
      "id": 980,
      "name": "Area",
      "site_id": 580
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6172,
        "feeder_id": 8235,
        "app_id": 1,
        "config": null,
        "date_created": "2024-09-06T09:24:15.952564",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6172,
        "feeder_id": 8235,
        "app_id": 1,
        "config": null,
        "date_created": "2024-09-06T09:24:15.952564",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 8232,
    "vendor": null,
    "name": "RTSpADD",
    "description": null,
    "location_id": 980,
    "camera": {
      "id": 8232,
      "_id": "0903f3e9-9f1c-428c-a67b-b3ae46157d27",
      "fps": 24,
      "apps": [
        "am"
      ],
      "coef": 170,
      "name": "RTSpADD",
      "type": 1,
      "uuid": "0903f3e9-9f1c-428c-a67b-b3ae46157d27",
      "index": -1,
      "width": 1920,
      "height": 1080,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "rtsp",
      "raw_source": "rtsp://192.168.100.188:8564/stream",
      "rtsp_source": "rtsp://mediamtx-l4y9f2:18554/0903f3e9-9f1c-428c-a67b-b3ae46157d27",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-09-06T03:51:11.677Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2024-09-16T03:25:03.000Z",
    "device_id": 1730,
    "device_name": "de-DE7600",
    "location": {
      "id": 980,
      "name": "Area",
      "site_id": 580
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6169,
        "feeder_id": 8232,
        "app_id": 1,
        "config": null,
        "date_created": "2024-09-06T03:51:11.692395",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6169,
        "feeder_id": 8232,
        "app_id": 1,
        "config": null,
        "date_created": "2024-09-06T03:51:11.692395",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/de-DE7600-file-1725594797379-462046931.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=l6RoGEIV2XUEeA7m3PI%2F4kHaS%2B7jCfM6rFMdSM3o6BE%3D",
        "feeder_id": 8232,
        "status": "Completed",
        "id": 10563
      }
    ]
  },
  {
    "id": 8212,
    "vendor": "meraki",
    "name": "OP",
    "description": "Diagonal",
    "location_id": 1373,
    "camera": {
      "width": 1920,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-08-28T05:32:56.843Z",
    "usecase_id": 3,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-L5GR-JP7D",
    "api_key": "",
    "status": "dormant",
    "device_model": "MV63",
    "created_by": 1020,
    "last_active_timestamp_v2": "2025-01-20T06:34:02.171Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1373,
      "name": "Diagonal",
      "site_id": 969
    },
    "updated_by": "mardy+staging@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6151,
        "feeder_id": 8212,
        "app_id": 188,
        "config": null,
        "date_created": "2024-08-28T05:34:08.003066",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6215,
        "feeder_id": 8212,
        "app_id": 9,
        "config": null,
        "date_created": "2024-10-04T07:57:46.322467",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6151,
        "feeder_id": 8212,
        "app_id": 188,
        "config": null,
        "date_created": "2024-08-28T05:34:08.003066",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 6215,
        "feeder_id": 8212,
        "app_id": 9,
        "config": null,
        "date_created": "2024-10-04T07:57:46.322467",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/meraki/Q2UV-L5GR-JP7D/meraki_image_1724823176885.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=T9AKDzBQIAYJiUprhEUF8xMPjjw2hImdS3mPGeA7B78%3D",
        "feeder_id": 8212,
        "status": "Completed",
        "id": 10533
      }
    ]
  },
  {
    "id": 8209,
    "vendor": "meraki",
    "name": "PUW-SideView",
    "description": "",
    "location_id": 1380,
    "camera": {
      "width": 1920,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-08-23T01:05:08.127Z",
    "usecase_id": 74,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-UUX5-MSCJ",
    "api_key": "",
    "status": "online",
    "device_model": "MV63",
    "created_by": 1020,
    "last_active_timestamp_v2": "2025-01-20T06:34:04.017Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1380,
      "name": "PUW",
      "site_id": 973
    },
    "updated_by": "mardy+staging@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6147,
        "feeder_id": 8209,
        "app_id": 188,
        "config": null,
        "date_created": "2024-08-23T01:05:38.962207",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6147,
        "feeder_id": 8209,
        "app_id": 188,
        "config": null,
        "date_created": "2024-08-23T01:05:38.962207",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/meraki/Q2UV-UUX5-MSCJ/meraki_image_1724375108159.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BczRR6C5jWEW2FrDMLKI1A%2BjbsjFjRSnHXr2AqDOKxU%3D",
        "feeder_id": 8209,
        "status": "Completed",
        "id": 10520
      }
    ]
  },
  {
    "id": 8170,
    "vendor": "meraki",
    "name": "L1-2 MV93 A1",
    "description": "",
    "location_id": 1140,
    "camera": {
      "width": 1080,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-08-16T08:11:15.272Z",
    "usecase_id": 71,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2LV-PWWF-6PTX",
    "api_key": "",
    "status": "online",
    "device_model": "MV93",
    "created_by": 1768,
    "last_active_timestamp_v2": "2025-01-20T06:34:04.017Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "yves@skunkworks.ai",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 819,
        "name": "fisheye"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6122,
        "feeder_id": 8170,
        "app_id": 145,
        "config": null,
        "date_created": "2024-08-16T08:11:49.20879",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6122,
        "feeder_id": 8170,
        "app_id": 145,
        "config": null,
        "date_created": "2024-08-16T08:11:49.20879",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/flatten-1726556700586-meraki_image_1726556645538.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=ix3g%2BcJdJUA54QzWn0mojAIzll0zURwlrQFGzEMxu%2FI%3D",
        "feeder_id": 8170,
        "status": "Completed",
        "id": 10589
      }
    ]
  },
  {
    "id": 8128,
    "vendor": "meraki",
    "name": "MV93 L1-RESERVED",
    "description": "",
    "location_id": 1140,
    "camera": {
      "width": 1080,
      "height": 1080,
      "fov_type": "Spotter"
    },
    "date_created": "2024-08-08T01:36:16.596Z",
    "usecase_id": 71,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2LW-2G2G-JZUL",
    "api_key": "",
    "status": "online",
    "device_model": "MV93",
    "created_by": 1008,
    "last_active_timestamp_v2": "2025-01-20T06:34:02.171Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "yves@skunkworks.ai",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 819,
        "name": "fisheye"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6094,
        "feeder_id": 8128,
        "app_id": 145,
        "config": null,
        "date_created": "2024-08-08T05:16:59.991783",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6094,
        "feeder_id": 8128,
        "app_id": 145,
        "config": null,
        "date_created": "2024-08-08T05:16:59.991783",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/meraki/Q2LW-2G2G-JZUL/meraki_image_1725951941547.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=mPD7xOJKuat8VzxKWPmwd6SUk9%2BXwxZsphrR59pNCgA%3D",
        "feeder_id": 8128,
        "status": "Completed",
        "id": 10570
      }
    ]
  },
  {
    "id": 8090,
    "vendor": null,
    "name": "Oak-D-logstest",
    "description": null,
    "location_id": 1015,
    "camera": {
      "id": 8090,
      "_id": "e88cf887-aa30-4257-ad8f-c216d6a53b87",
      "bus": "19443010D18D9A2E00",
      "fps": -1,
      "apps": [
        "am-oakd-usb"
      ],
      "card": "1.1",
      "coef": 170,
      "name": "Oak-D-logstest",
      "type": 0,
      "uuid": "e88cf887-aa30-4257-ad8f-c216d6a53b87",
      "width": 720,
      "height": 720,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "oakd-usb",
      "raw_source": "19443010D18D9A2E00",
      "rtsp_source": "rtsp://localhost:18554/e88cf887-aa30-4257-ad8f-c216d6a53b87",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-07-10T09:44:15.046Z",
    "usecase_id": 83,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2024-07-10T10:49:44.000Z",
    "device_id": 1715,
    "device_name": "DESKTOP-BN4DN7J",
    "location": {
      "id": 1015,
      "name": "Dine Area",
      "site_id": 834
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6066,
        "feeder_id": 8090,
        "app_id": 210,
        "config": null,
        "date_created": "2024-07-10T09:44:15.06145",
        "app": {
          "id": 210,
          "name": "Audience Measurement - Oak-D",
          "description": "Anonymously detect people - converting human data to metric data",
          "code": "am-oakd-usb",
          "source": "https://viana.blob.core.windows.net/bin/amv2/dev/am.7z",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-aam-oak-d.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=hOZtCWB88ycoY2CPpVUepp7yJ4TtUL5s3c%2FRsZpXnMg%3D",
            "type": "edge",
            "cover": "https://viana.blob.core.windows.net/production/asset-serviceapplets/covers/am.png",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2024-03-25T03:28:29.256"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6066,
        "feeder_id": 8090,
        "app_id": 210,
        "config": null,
        "date_created": "2024-07-10T09:44:15.06145",
        "app": {
          "id": 210,
          "name": "Audience Measurement - Oak-D",
          "description": "Anonymously detect people - converting human data to metric data",
          "code": "am-oakd-usb",
          "source": "https://viana.blob.core.windows.net/bin/amv2/dev/am.7z",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-aam-oak-d.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=hOZtCWB88ycoY2CPpVUepp7yJ4TtUL5s3c%2FRsZpXnMg%3D",
            "type": "edge",
            "cover": "https://viana.blob.core.windows.net/production/asset-serviceapplets/covers/am.png",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2024-03-25T03:28:29.256"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 8075,
    "vendor": null,
    "name": "HD-Pro-C920-AAM",
    "description": null,
    "location_id": 680,
    "camera": {
      "id": 8075,
      "_id": "3c89d6bc-4f17-48cc-9895-45d131f7fb62",
      "bus": "USB\\VID_046D&PID_0892&MI_00\\6&1325A29A&0&0000",
      "fps": 24,
      "apps": [
        "am"
      ],
      "card": "HD Pro Webcam C920",
      "coef": 170,
      "name": "HD-Pro-C920-AAM",
      "type": 0,
      "uuid": "3c89d6bc-4f17-48cc-9895-45d131f7fb62",
      "index": 0,
      "width": 2304,
      "height": 1536,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "usb",
      "raw_source": 0,
      "rtsp_source": "rtsp://localhost:18554/3c89d6bc-4f17-48cc-9895-45d131f7fb62",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-07-02T03:22:13.933Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2024-07-03T07:49:45.000Z",
    "device_id": 1697,
    "device_name": "DESKTOP-PTM01T4",
    "location": {
      "id": 680,
      "name": "K1",
      "site_id": 584
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6052,
        "feeder_id": 8075,
        "app_id": 1,
        "config": null,
        "date_created": "2024-07-02T03:22:13.953256",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6052,
        "feeder_id": 8075,
        "app_id": 1,
        "config": null,
        "date_created": "2024-07-02T03:22:13.953256",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 8074,
    "vendor": "meraki",
    "name": "L1-1 MV63 C",
    "description": "",
    "location_id": 1140,
    "camera": {
      "id": 8074,
      "apps": [],
      "name": "L1-1 MV63 C",
      "site": {},
      "type": 3,
      "uuid": "1c9ecc87-12d9-4cb5-9d9d-f242179a8252",
      "width": 1280,
      "camera": null,
      "height": 720,
      "source": "Q2UV-4E3E-LUYC",
      "vendor": "meraki",
      "api_key": "5389284d0252ae7e998c4c7f8f8579392815f05e",
      "network": {
        "id": 14,
        "name": "meldCx_Skunkworks"
      },
      "fov_type": "Spotter",
      "location": {
        "id": 481,
        "name": "Unallocated",
        "site_id": 507,
        "floorplan_id": null
      },
      "is_active": true,
      "serial_id": "Q2UV-4E3E-LUYC",
      "network_id": 14,
      "updated_by": "keith+viana_admin_superuser@meldcx.com",
      "usecase_id": null,
      "description": null,
      "feeder_tags": null,
      "identity_id": 2,
      "location_id": 481,
      "stream_type": "meraki",
      "date_created": "2024-07-02T03:01:26.002Z",
      "device_model": "MV63",
      "feeder_assets": null,
      "feeder_attributes": []
    },
    "date_created": "2024-07-02T03:01:26.002Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-4E3E-LUYC",
    "api_key": "",
    "status": "online",
    "device_model": "MV63",
    "created_by": 1144,
    "last_active_timestamp_v2": "2025-01-20T06:34:04.017Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1140,
      "name": "RED Lite A",
      "site_id": 912
    },
    "updated_by": "keith+viana_admin_superuser@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6050,
        "feeder_id": 8074,
        "app_id": 7,
        "config": null,
        "date_created": "2024-07-02T03:14:45.490922",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6050,
        "feeder_id": 8074,
        "app_id": 7,
        "config": null,
        "date_created": "2024-07-02T03:14:45.490922",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/meraki/Q2UV-4E3E-LUYC/meraki_image_1724292928512.jpeg?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=d2hRtyvSLkDfEP8VO7OJq%2BU6um6aVhcTUrC0lkqvtd0%3D",
        "feeder_id": 8074,
        "status": "Completed",
        "id": 10514
      }
    ]
  },
  {
    "id": 8067,
    "vendor": null,
    "name": "Sensor 01",
    "description": "",
    "location_id": 1371,
    "camera": {
      "id": 8067,
      "_id": "0700f84d-6f63-4dcf-9449-e71941fe6f28",
      "bus": "usb0000001409",
      "fps": 24,
      "apps": [
        "petra"
      ],
      "card": "UHD4K",
      "coef": 170,
      "name": "Sensor 01",
      "type": 0,
      "uuid": "0700f84d-6f63-4dcf-9449-e71941fe6f28",
      "index": 0,
      "width": 1920,
      "height": 1080,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "usb",
      "raw_source": 0,
      "rtsp_source": "rtsp://rtsp-simple-server-u9f9j2:18554/0700f84d-6f63-4dcf-9449-e71941fe6f28",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-07-01T06:59:33.805Z",
    "usecase_id": 79,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1017,
    "last_active_timestamp_v2": "2024-07-01T07:18:37.000Z",
    "device_id": 1717,
    "device_name": "coatro-NUC12DCMi7",
    "location": {
      "id": 1371,
      "name": "Entrance",
      "site_id": 967
    },
    "updated_by": "grace+staging@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": [
      {
        "id": 827,
        "name": "dti_logo"
      }
    ],
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6045,
        "feeder_id": 8067,
        "app_id": 204,
        "config": null,
        "date_created": "2024-07-01T06:59:33.82701",
        "app": {
          "id": 204,
          "name": "Petra",
          "description": "Petra",
          "code": "petra",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-petra.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2BZF1JDwN%2BHkW1iqkgGP9MKpKxP5x2CRBjHb%2F9GERpBA%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "petra_event",
                "catch": "petra_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              },
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Petra.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2023-09-15T14:40:47.384112"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6045,
        "feeder_id": 8067,
        "app_id": 204,
        "config": null,
        "date_created": "2024-07-01T06:59:33.82701",
        "app": {
          "id": 204,
          "name": "Petra",
          "description": "Petra",
          "code": "petra",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-petra.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2BZF1JDwN%2BHkW1iqkgGP9MKpKxP5x2CRBjHb%2F9GERpBA%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "petra_event",
                "catch": "petra_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              },
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Petra.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2023-09-15T14:40:47.384112"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/coatro-NUC12DCMi7-file-1719817263555-210965997.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=bPQWobrwMPKLQma14FjNK5hTpvGs5EIVVe%2FDs7oXZrw%3D",
        "feeder_id": 8067,
        "status": "Completed",
        "id": 10231
      }
    ]
  },
  {
    "id": 8057,
    "vendor": null,
    "name": "alzertest",
    "description": null,
    "location_id": 588,
    "camera": {
      "id": 8057,
      "_id": "b40a0531-e770-4671-8455-3ebf1154c065",
      "bus": "USB\\VID_1BCF&PID_2CE4&MI_00\\6&917BBF&0&0000",
      "fps": 24,
      "apps": [
        "am"
      ],
      "card": "UHD4K",
      "coef": 170,
      "name": "alzertest",
      "type": 0,
      "uuid": "b40a0531-e770-4671-8455-3ebf1154c065",
      "index": 0,
      "width": 3840,
      "height": 2160,
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "usb",
      "raw_source": 0,
      "rtsp_source": "rtsp://localhost:18554/b40a0531-e770-4671-8455-3ebf1154c065",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-06-26T07:45:30.130Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1670,
    "last_active_timestamp_v2": "2024-06-27T02:54:52.000Z",
    "device_id": 1716,
    "device_name": "ALZERCASINO",
    "location": {
      "id": 588,
      "name": "CDO to Airport Lumbia",
      "site_id": 555
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 6035,
        "feeder_id": 8057,
        "app_id": 1,
        "config": null,
        "date_created": "2024-06-26T07:45:30.148036",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 6035,
        "feeder_id": 8057,
        "app_id": 1,
        "config": null,
        "date_created": "2024-06-26T07:45:30.148036",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 7902,
    "vendor": "meraki",
    "name": "SARS Durban Entry",
    "description": "",
    "location_id": 1360,
    "camera": {
      "id": 7902,
      "apps": [],
      "name": "SARS Durban Entry",
      "site": {},
      "type": 3,
      "uuid": "d0bac3d0-1976-4b12-af1b-68f71ee83104",
      "width": 1280,
      "camera": null,
      "height": 720,
      "source": "Q2UV-MZBD-RA5J",
      "api_key": "0c203292d4eff06a7c41cb6a4fc69ed4ea2da212",
      "network": {
        "id": 14,
        "name": "meldCx_Skunkworks"
      },
      "fov_type": "Spotter",
      "location": {
        "id": 481,
        "name": "Unallocated",
        "site_id": 507,
        "floorplan_id": null
      },
      "is_active": true,
      "serial_id": "Q2UV-MZBD-RA5J",
      "network_id": 14,
      "updated_by": "philnyl+meldcx+staging@meldcx.com",
      "usecase_id": null,
      "description": null,
      "feeder_tags": null,
      "identity_id": 2,
      "location_id": 481,
      "stream_type": "meraki",
      "date_created": "2024-04-23T04:22:21.373Z",
      "device_model": "MV63",
      "feeder_assets": null,
      "feeder_attributes": []
    },
    "date_created": "2024-04-23T04:22:21.373Z",
    "usecase_id": 3,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-MZBD-RA5J",
    "api_key": "",
    "status": "online",
    "device_model": "MV63",
    "created_by": 675,
    "last_active_timestamp_v2": "2024-04-23T04:24:11.874Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1360,
      "name": "Durban Scanner",
      "site_id": 962
    },
    "updated_by": "philnyl+meldcx+staging@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5895,
        "feeder_id": 7902,
        "app_id": 9,
        "config": null,
        "date_created": "2024-04-23T04:26:03.706425",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5895,
        "feeder_id": 7902,
        "app_id": 9,
        "config": null,
        "date_created": "2024-04-23T04:26:03.706425",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/file-1716540432213-826622036.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=HZBWXMXiazWQ6zrQ0fRsKp6d91ri47XueZ4oa4XeFPI%3D",
        "feeder_id": 7902,
        "status": "Completed",
        "id": 10143
      }
    ]
  },
  {
    "id": 7801,
    "vendor": null,
    "name": "alzer-test",
    "description": null,
    "location_id": 1275,
    "camera": {
      "id": 7801,
      "_id": "d2f898d0-0651-4204-b60c-ee4dd0f5e615",
      "bus": "USB\\VID_1BCF&PID_2CE4&MI_00\\6&917BBF&0&0000",
      "fps": 24,
      "apps": [
        "am"
      ],
      "card": "UHD4K",
      "coef": 170,
      "name": "alzer-test",
      "type": 0,
      "uuid": "d2f898d0-0651-4204-b60c-ee4dd0f5e615",
      "index": 0,
      "width": 3840,
      "height": 2160,
      "source": "rtsp://localhost:18554/d2f898d0-0651-4204-b60c-ee4dd0f5e615",
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "usb",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-04-01T09:15:51.220Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1670,
    "last_active_timestamp_v2": "2024-04-01T09:15:51.220Z",
    "device_id": 1659,
    "device_name": "ALZER-CASINO-PC",
    "location": {
      "id": 1275,
      "name": "DT-Entrance Area",
      "site_id": 938
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5806,
        "feeder_id": 7801,
        "app_id": 1,
        "config": null,
        "date_created": "2024-04-01T09:15:51.328792",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5806,
        "feeder_id": 7801,
        "app_id": 1,
        "config": null,
        "date_created": "2024-04-01T09:15:51.328792",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 7795,
    "vendor": "meraki",
    "name": "Blur-PUW",
    "description": "",
    "location_id": 1358,
    "camera": {
      "id": 7795,
      "apps": [],
      "name": "Blur-PUW",
      "site": {},
      "type": 3,
      "uuid": "6dcf6f49-ad74-4320-becd-fda4e655eba3",
      "width": 1280,
      "camera": null,
      "height": 720,
      "source": "Q2UV-U3GT-TN6C",
      "api_key": "1d47c652d53b036b31e1a9742d439ced5f8643ee",
      "network": {
        "id": 14,
        "name": "meldCx_Skunkworks"
      },
      "fov_type": "Spotter",
      "location": {
        "id": 481,
        "name": "Unallocated",
        "site_id": 507,
        "floorplan_id": null
      },
      "is_active": true,
      "serial_id": "Q2UV-U3GT-TN6C",
      "network_id": 14,
      "updated_by": "mardy+staging@meldcx.com",
      "usecase_id": null,
      "description": null,
      "feeder_tags": null,
      "identity_id": 2,
      "location_id": 481,
      "stream_type": "meraki",
      "date_created": "2024-03-22T05:50:07.164Z",
      "device_model": "MV63",
      "feeder_assets": null,
      "feeder_attributes": []
    },
    "date_created": "2024-03-22T05:50:07.164Z",
    "usecase_id": 3,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-U3GT-TN6C",
    "api_key": "",
    "status": "online",
    "device_model": "MV63",
    "created_by": 1020,
    "last_active_timestamp_v2": null,
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1358,
      "name": "PUW",
      "site_id": 961
    },
    "updated_by": "mardy+staging@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5799,
        "feeder_id": 7795,
        "app_id": 188,
        "config": null,
        "date_created": "2024-03-22T05:53:18.387801",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 5896,
        "feeder_id": 7795,
        "app_id": 9,
        "config": null,
        "date_created": "2024-04-23T06:21:50.920517",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5799,
        "feeder_id": 7795,
        "app_id": 188,
        "config": null,
        "date_created": "2024-03-22T05:53:18.387801",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 5896,
        "feeder_id": 7795,
        "app_id": 9,
        "config": null,
        "date_created": "2024-04-23T06:21:50.920517",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/file-1716540469009-465961794.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=2YxXRCRZ88%2Fwuv4okpTHq7CShzvIi9edbclbWldHWIU%3D",
        "feeder_id": 7795,
        "status": "Completed",
        "id": 10144
      }
    ]
  },
  {
    "id": 7794,
    "vendor": "meraki",
    "name": "BLUR-OP",
    "description": "",
    "location_id": 1357,
    "camera": {
      "id": 7794,
      "apps": [],
      "name": "BLUR-OP",
      "site": {},
      "type": 3,
      "uuid": "18370f11-528e-47af-8c2d-4aa334072bbc",
      "width": 1280,
      "camera": null,
      "height": 720,
      "source": "Q2UV-6574-FVAE",
      "api_key": "1d47c652d53b036b31e1a9742d439ced5f8643ee",
      "network": {
        "id": 14,
        "name": "meldCx_Skunkworks"
      },
      "fov_type": "Spotter",
      "location": {
        "id": 481,
        "name": "Unallocated",
        "site_id": 507,
        "floorplan_id": null
      },
      "is_active": true,
      "serial_id": "Q2UV-6574-FVAE",
      "network_id": 14,
      "updated_by": "mardy+staging@meldcx.com",
      "usecase_id": null,
      "description": null,
      "feeder_tags": null,
      "identity_id": 2,
      "location_id": 481,
      "stream_type": "meraki",
      "date_created": "2024-03-22T05:50:07.139Z",
      "device_model": "MV63",
      "feeder_assets": null,
      "feeder_attributes": []
    },
    "date_created": "2024-03-22T05:50:07.139Z",
    "usecase_id": 3,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-6574-FVAE",
    "api_key": "",
    "status": "online",
    "device_model": "MV63",
    "created_by": 1020,
    "last_active_timestamp_v2": null,
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1357,
      "name": "OP",
      "site_id": 961
    },
    "updated_by": "mardy+staging@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5800,
        "feeder_id": 7794,
        "app_id": 188,
        "config": null,
        "date_created": "2024-03-22T05:53:37.339601",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 5897,
        "feeder_id": 7794,
        "app_id": 9,
        "config": null,
        "date_created": "2024-04-23T06:33:06.508474",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5800,
        "feeder_id": 7794,
        "app_id": 188,
        "config": null,
        "date_created": "2024-03-22T05:53:37.339601",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 5897,
        "feeder_id": 7794,
        "app_id": 9,
        "config": null,
        "date_created": "2024-04-23T06:33:06.508474",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/file-1717488987918-897280173.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Fs8iUv%2FHrJegZaC0BN8ansPfY%2FySMcfvczMWuKOzBAM%3D",
        "feeder_id": 7794,
        "status": "Completed",
        "id": 10160
      }
    ]
  },
  {
    "id": 7762,
    "vendor": null,
    "name": "tram",
    "description": null,
    "location_id": 1275,
    "camera": {
      "id": 7762,
      "_id": "36a33cdc-8530-4214-a0a2-313443492e84",
      "fps": 24,
      "apps": [
        "tram"
      ],
      "coef": 170,
      "name": "tram",
      "type": 1,
      "uuid": "36a33cdc-8530-4214-a0a2-313443492e84",
      "index": -1,
      "width": 1920,
      "height": 1072,
      "source": "rtsp://rtsp-simple-server-z0k4y9:8554/36a33cdc-8530-4214-a0a2-313443492e84",
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "rtsp",
      "raw_source": "rtsp://192.168.100.188:8564/stream",
      "fov_height_unit": "meters"
    },
    "date_created": "2024-02-07T10:48:07.995Z",
    "usecase_id": 3,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1017,
    "last_active_timestamp_v2": "2024-02-12T06:38:46.000Z",
    "device_id": 1654,
    "device_name": "advantech-Default-string",
    "location": {
      "id": 1275,
      "name": "DT-Entrance Area",
      "site_id": 938
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5766,
        "feeder_id": 7762,
        "app_id": 9,
        "config": null,
        "date_created": "2024-02-07T10:48:08.105239",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5766,
        "feeder_id": 7762,
        "app_id": 9,
        "config": null,
        "date_created": "2024-02-07T10:48:08.105239",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/advantech-Default-string-file-1707373071831-740735811.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=3BaBIrYXKQ8WML2ZU8ACJYldUNcYYEymlnFBkY1tcSY%3D",
        "feeder_id": 7762,
        "status": "Completed",
        "id": 9515
      }
    ]
  },
  {
    "id": 7749,
    "vendor": "meraki",
    "name": "Y4",
    "description": "",
    "location_id": 1351,
    "camera": {
      "id": 7749,
      "apps": [],
      "name": "Y4",
      "site": {},
      "type": 3,
      "uuid": "c797f731-5393-435f-9811-c853b0f0390c",
      "width": 1280,
      "camera": null,
      "height": 720,
      "source": "Q2UV-DYK8-LTTY",
      "api_key": "1d47c652d53b036b31e1a9742d439ced5f8643ee",
      "network": {
        "id": 14,
        "name": "meldCx_Skunkworks"
      },
      "fov_type": "Spotter",
      "location": {
        "id": 481,
        "name": "Unallocated",
        "site_id": 507,
        "floorplan_id": null
      },
      "is_active": true,
      "serial_id": "Q2UV-DYK8-LTTY",
      "network_id": 14,
      "updated_by": "mardy+staging@meldcx.com",
      "usecase_id": null,
      "description": null,
      "feeder_tags": null,
      "identity_id": 2,
      "location_id": 481,
      "stream_type": "meraki",
      "date_created": "2024-01-29T08:10:52.975Z",
      "device_model": "MV63",
      "feeder_assets": null,
      "feeder_attributes": []
    },
    "date_created": "2024-01-29T08:10:52.975Z",
    "usecase_id": 74,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-DYK8-LTTY",
    "api_key": "",
    "status": "dormant",
    "device_model": "MV63",
    "created_by": 1020,
    "last_active_timestamp_v2": "2025-01-20T06:34:02.171Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1351,
      "name": "Y4",
      "site_id": 956
    },
    "updated_by": "arvin+test@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5753,
        "feeder_id": 7749,
        "app_id": 188,
        "config": null,
        "date_created": "2024-01-29T08:13:42.256281",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5753,
        "feeder_id": 7749,
        "app_id": 188,
        "config": null,
        "date_created": "2024-01-29T08:13:42.256281",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/file-1706515903081-536228998.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=fLNLhMzglWG1W%2B1%2BCRsgx%2BjVVD%2FzGzvr7t9OGGq1%2FUs%3D",
        "feeder_id": 7749,
        "status": "Completed",
        "id": 9333
      }
    ]
  },
  {
    "id": 7747,
    "vendor": "meraki",
    "name": "PUW",
    "description": "",
    "location_id": 1372,
    "camera": {
      "id": 7747,
      "apps": [],
      "name": "ENT",
      "site": {},
      "type": 3,
      "uuid": "0f28f2dd-63c9-4a89-9224-25a0fa09b641",
      "width": 1280,
      "camera": null,
      "height": 720,
      "source": "Q2UV-ZGPK-YRPS",
      "api_key": "1d47c652d53b036b31e1a9742d439ced5f8643ee",
      "network": {
        "id": 14,
        "name": "meldCx_Skunkworks"
      },
      "fov_type": "Spotter",
      "location": {
        "id": 481,
        "name": "Unallocated",
        "site_id": 507,
        "floorplan_id": null
      },
      "is_active": true,
      "serial_id": "Q2UV-ZGPK-YRPS",
      "network_id": 14,
      "updated_by": "mardy+staging@meldcx.com",
      "usecase_id": null,
      "description": null,
      "feeder_tags": null,
      "identity_id": 2,
      "location_id": 481,
      "stream_type": "meraki",
      "date_created": "2024-01-29T04:00:16.999Z",
      "device_model": "MV63",
      "feeder_assets": null,
      "feeder_attributes": []
    },
    "date_created": "2024-01-29T04:00:16.999Z",
    "usecase_id": 74,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-ZGPK-YRPS",
    "api_key": "",
    "status": "dormant",
    "device_model": "MV63",
    "created_by": 1020,
    "last_active_timestamp_v2": "2025-01-20T06:34:02.171Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1372,
      "name": "SideView",
      "site_id": 969
    },
    "updated_by": "mardy+staging@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5751,
        "feeder_id": 7747,
        "app_id": 188,
        "config": null,
        "date_created": "2024-01-29T08:12:48.090615",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5751,
        "feeder_id": 7747,
        "app_id": 188,
        "config": null,
        "date_created": "2024-01-29T08:12:48.090615",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/file-1724736532942-28510154.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=y5PI%2FK7o60hCHQdm90lPrIO9DIt0m7cgFEuuIPUvPvU%3D",
        "feeder_id": 7747,
        "status": "Completed",
        "id": 10528
      }
    ]
  },
  {
    "id": 7746,
    "vendor": "meraki",
    "name": "Y2",
    "description": "",
    "location_id": 1349,
    "camera": {
      "id": 7746,
      "apps": [],
      "name": "Y2",
      "site": {},
      "type": 3,
      "uuid": "b724214b-cbae-4132-9bd8-f6ae17fafdf9",
      "width": 1280,
      "camera": null,
      "height": 720,
      "source": "Q2UV-7TZL-BJNH",
      "api_key": "1d47c652d53b036b31e1a9742d439ced5f8643ee",
      "network": {
        "id": 14,
        "name": "meldCx_Skunkworks"
      },
      "fov_type": "Spotter",
      "location": {
        "id": 481,
        "name": "Unallocated",
        "site_id": 507,
        "floorplan_id": null
      },
      "fov_angle": "25",
      "is_active": true,
      "serial_id": "Q2UV-7TZL-BJNH",
      "fov_height": "2.5",
      "network_id": 14,
      "updated_by": "mardy+staging@meldcx.com",
      "usecase_id": null,
      "description": null,
      "feeder_tags": null,
      "identity_id": 2,
      "location_id": 481,
      "stream_type": "meraki",
      "date_created": "2024-01-29T03:59:55.130Z",
      "device_model": "MV63",
      "feeder_assets": null,
      "fov_height_unit": "meters",
      "feeder_attributes": [],
      "fov_install_angle": "45"
    },
    "date_created": "2024-01-29T03:59:55.130Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UV-7TZL-BJNH",
    "api_key": "",
    "status": "dormant",
    "device_model": "MV63",
    "created_by": 1020,
    "last_active_timestamp_v2": "2025-01-20T06:34:02.171Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1349,
      "name": "Y2",
      "site_id": 956
    },
    "updated_by": "lennie@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5769,
        "feeder_id": 7746,
        "app_id": 7,
        "config": null,
        "date_created": "2024-02-12T07:13:25.588168",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5769,
        "feeder_id": 7746,
        "app_id": 7,
        "config": null,
        "date_created": "2024-02-12T07:13:25.588168",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/file-1717488099062-343540406.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=8iUBa2qLMH8HkG3Tl9Mzo%2BEGQspVt6gL0cZZOjbk1E8%3D",
        "feeder_id": 7746,
        "status": "Completed",
        "id": 10157
      }
    ]
  },
  {
    "id": 7744,
    "vendor": "meraki",
    "name": "OP",
    "description": "",
    "location_id": 1346,
    "camera": {
      "id": 7744,
      "apps": [],
      "name": "OP",
      "site": {},
      "type": 3,
      "uuid": "4935c7d4-cd0e-45b3-ab48-c296bce681fc",
      "width": 1280,
      "camera": null,
      "height": 720,
      "source": "Q2UW-XD5F-WH6U",
      "api_key": "1d47c652d53b036b31e1a9742d439ced5f8643ee",
      "network": {
        "id": 14,
        "name": "meldCx_Skunkworks"
      },
      "fov_type": "Spotter",
      "location": {
        "id": 481,
        "name": "Unallocated",
        "site_id": 507,
        "floorplan_id": null
      },
      "is_active": true,
      "serial_id": "Q2UW-XD5F-WH6U",
      "network_id": 14,
      "updated_by": "mardy+staging@meldcx.com",
      "usecase_id": null,
      "description": null,
      "feeder_tags": null,
      "identity_id": 2,
      "location_id": 481,
      "stream_type": "meraki",
      "date_created": "2024-01-29T03:59:55.087Z",
      "device_model": "MV63X",
      "feeder_assets": null,
      "feeder_attributes": []
    },
    "date_created": "2024-01-29T03:59:55.087Z",
    "usecase_id": 74,
    "network_id": 14,
    "is_active": true,
    "serial_id": "Q2UW-XD5F-WH6U",
    "api_key": "",
    "status": "dormant",
    "device_model": "MV63X",
    "created_by": 1020,
    "last_active_timestamp_v2": "2025-01-20T06:34:02.171Z",
    "device_id": null,
    "device_name": null,
    "location": {
      "id": 1346,
      "name": "OP",
      "site_id": 956
    },
    "updated_by": "lennie@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5748,
        "feeder_id": 7744,
        "app_id": 188,
        "config": null,
        "date_created": "2024-01-29T08:11:37.40763",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5748,
        "feeder_id": 7744,
        "app_id": 188,
        "config": null,
        "date_created": "2024-01-29T08:11:37.40763",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/file-1717488662263-289087127.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=TN4dFOn4UQkqzis4jdilCjq8ddZ3Wqa31AULVJ1ielk%3D",
        "feeder_id": 7744,
        "status": "Completed",
        "id": 10159
      }
    ]
  },
  {
    "id": 7620,
    "vendor": null,
    "name": "MV93 - L1 Cam C",
    "description": null,
    "location_id": 1328,
    "camera": {
      "id": 7620,
      "_id": "f513bc72-8c80-4d21-a09a-fbeb35d345b1",
      "fps": 24,
      "apps": [
        "journeys-cpu"
      ],
      "coef": 170,
      "name": "MV93 - L1 Cam C",
      "type": 1,
      "uuid": "f513bc72-8c80-4d21-a09a-fbeb35d345b1",
      "index": -1,
      "width": 1080,
      "height": 1080,
      "source": "rtsp://rtsp-simple-server-O5D2N7:8554/f513bc72-8c80-4d21-a09a-fbeb35d345b1",
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "rtsp",
      "raw_source": "rtsp://192.168.100.207:9000/live",
      "fov_height_unit": "meters"
    },
    "date_created": "2023-11-20T09:03:17.306Z",
    "usecase_id": 80,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1461,
    "last_active_timestamp_v2": "2023-12-05T01:04:50.000Z",
    "device_id": 1640,
    "device_name": "ubuntu-DE7600",
    "location": {
      "id": 1328,
      "name": "Cam Zone C",
      "site_id": 912
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5625,
        "feeder_id": 7620,
        "app_id": 205,
        "config": null,
        "date_created": "2023-11-20T09:03:17.413372",
        "app": {
          "id": 205,
          "name": "Journeys",
          "description": "Journeys",
          "code": "journeys-cpu",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-journeys-var2.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=ldAEYMXX8Cf0F8e7VpHbO9024WNJ8N1JFls%2BH5D8mpQ%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "journeys_event",
                "catch": "journeys_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": true,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": true,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Journeys.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5625,
        "feeder_id": 7620,
        "app_id": 205,
        "config": null,
        "date_created": "2023-11-20T09:03:17.413372",
        "app": {
          "id": 205,
          "name": "Journeys",
          "description": "Journeys",
          "code": "journeys-cpu",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-journeys-var2.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=ldAEYMXX8Cf0F8e7VpHbO9024WNJ8N1JFls%2BH5D8mpQ%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "journeys_event",
                "catch": "journeys_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": true,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": true,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Journeys.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ubuntu-DE7600-file-1701321939326-169291230.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=qTgVgKAy8ITJQSg7goC5vBnchulRZFtv9FsilSnviuY%3D",
        "feeder_id": 7620,
        "status": "Completed",
        "id": 9127
      }
    ]
  },
  {
    "id": 7619,
    "vendor": null,
    "name": "MV93 - L1 Cam A",
    "description": null,
    "location_id": 1325,
    "camera": {
      "id": 7619,
      "_id": "bbeefe36-9e22-467e-8f20-fabcac8e1e56",
      "fps": 24,
      "apps": [
        "journeys-cpu"
      ],
      "coef": 170,
      "name": "MV93 - L1 Cam A",
      "type": 1,
      "uuid": "bbeefe36-9e22-467e-8f20-fabcac8e1e56",
      "index": -1,
      "width": 1080,
      "height": 1080,
      "source": "rtsp://rtsp-simple-server-A6J3N9:8554/bbeefe36-9e22-467e-8f20-fabcac8e1e56",
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "rtsp",
      "raw_source": "rtsp://192.168.100.17:9000/live",
      "fov_height_unit": "meters"
    },
    "date_created": "2023-11-20T09:01:48.961Z",
    "usecase_id": 80,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1461,
    "last_active_timestamp_v2": "2023-12-05T01:05:30.000Z",
    "device_id": 1637,
    "device_name": "argo",
    "location": {
      "id": 1325,
      "name": "JNY Zone",
      "site_id": 912
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5624,
        "feeder_id": 7619,
        "app_id": 205,
        "config": null,
        "date_created": "2023-11-20T09:01:49.063363",
        "app": {
          "id": 205,
          "name": "Journeys",
          "description": "Journeys",
          "code": "journeys-cpu",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-journeys-var2.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=ldAEYMXX8Cf0F8e7VpHbO9024WNJ8N1JFls%2BH5D8mpQ%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "journeys_event",
                "catch": "journeys_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": true,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": true,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Journeys.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5624,
        "feeder_id": 7619,
        "app_id": 205,
        "config": null,
        "date_created": "2023-11-20T09:01:49.063363",
        "app": {
          "id": 205,
          "name": "Journeys",
          "description": "Journeys",
          "code": "journeys-cpu",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-journeys-var2.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=ldAEYMXX8Cf0F8e7VpHbO9024WNJ8N1JFls%2BH5D8mpQ%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "journeys_event",
                "catch": "journeys_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": true,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": true,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Journeys.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/argo-file-1701321941411-398335502.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=G3Lm3ntCwUhGQPUD4ikbqWsAM%2BmSSA6YUkaR4MD3k%2BM%3D",
        "feeder_id": 7619,
        "status": "Completed",
        "id": 9128
      }
    ]
  },
  {
    "id": 7618,
    "vendor": null,
    "name": "MV93 - L1 Cam B",
    "description": "",
    "location_id": 1327,
    "camera": {
      "id": 7618,
      "_id": "5414d774-1d82-48be-b1e6-9ad557a86f58",
      "fps": 24,
      "apps": [
        "journeys-cpu"
      ],
      "coef": 170,
      "name": "MV93 - L1 Cam B",
      "type": 1,
      "uuid": "5414d774-1d82-48be-b1e6-9ad557a86f58",
      "index": -1,
      "width": 1080,
      "height": 1080,
      "source": "rtsp://rtsp-simple-server-P5R2R9:8554/5414d774-1d82-48be-b1e6-9ad557a86f58",
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "rtsp",
      "raw_source": "rtsp://192.168.100.111:9000/live",
      "fov_height_unit": "meters"
    },
    "date_created": "2023-11-20T08:59:38.251Z",
    "usecase_id": 80,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1461,
    "last_active_timestamp_v2": "2023-12-05T01:11:52.000Z",
    "device_id": 1642,
    "device_name": "ubuntu-DE5500-M",
    "location": {
      "id": 1327,
      "name": "Zone Cam B",
      "site_id": 912
    },
    "updated_by": "jonathan@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5623,
        "feeder_id": 7618,
        "app_id": 205,
        "config": null,
        "date_created": "2023-11-20T08:59:38.35777",
        "app": {
          "id": 205,
          "name": "Journeys",
          "description": "Journeys",
          "code": "journeys-cpu",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-journeys-var2.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=ldAEYMXX8Cf0F8e7VpHbO9024WNJ8N1JFls%2BH5D8mpQ%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "journeys_event",
                "catch": "journeys_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": true,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": true,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Journeys.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5623,
        "feeder_id": 7618,
        "app_id": 205,
        "config": null,
        "date_created": "2023-11-20T08:59:38.35777",
        "app": {
          "id": 205,
          "name": "Journeys",
          "description": "Journeys",
          "code": "journeys-cpu",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-journeys-var2.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=ldAEYMXX8Cf0F8e7VpHbO9024WNJ8N1JFls%2BH5D8mpQ%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "journeys_event",
                "catch": "journeys_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": true,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": true,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Journeys.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ubuntu-DE5500-M-file-1701321947829-964548303.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=nEXC1G5xKVQukRB6PZphNxHRz25pekoj07RSFPAIrrg%3D",
        "feeder_id": 7618,
        "status": "Completed",
        "id": 9129
      }
    ]
  },
  {
    "id": 7615,
    "vendor": null,
    "name": "cd001",
    "description": null,
    "location_id": 1275,
    "camera": {
      "id": 7615,
      "_id": "1e4e195e-d794-4ae8-83e3-1a503771cd35",
      "bus": "usb0000001401",
      "fps": 24,
      "apps": [
        "am"
      ],
      "card": "FHD60F",
      "coef": 170,
      "name": "cd001",
      "type": 0,
      "uuid": "1e4e195e-d794-4ae8-83e3-1a503771cd35",
      "index": 0,
      "width": 1280,
      "height": 720,
      "source": "rtsp://rtsp-simple-server-L9Y4R6:8554/1e4e195e-d794-4ae8-83e3-1a503771cd35",
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "usb",
      "fov_angle": "76",
      "fov_height": "2.4",
      "fov_height_unit": "meters",
      "fov_install_angle": "75"
    },
    "date_created": "2023-11-17T09:14:41.410Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1017,
    "last_active_timestamp_v2": "2023-11-19T22:27:42.000Z",
    "device_id": 1620,
    "device_name": "ubuntu08-NUC11PAHi5",
    "location": {
      "id": 1275,
      "name": "DT-Entrance Area",
      "site_id": 938
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5620,
        "feeder_id": 7615,
        "app_id": 1,
        "config": null,
        "date_created": "2023-11-17T09:14:41.52031",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5620,
        "feeder_id": 7615,
        "app_id": 1,
        "config": null,
        "date_created": "2023-11-17T09:14:41.52031",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ubuntu08-NUC11PAHi5-file-1700212556200-790619657.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=5yediXTtrHwgI7IxgVzt53hprnE3aAe9RkRmIIngPeY%3D",
        "feeder_id": 7615,
        "status": "Completed",
        "id": 9071
      }
    ]
  },
  {
    "id": 7600,
    "vendor": null,
    "name": "Test HD Usb Cam",
    "description": null,
    "location_id": 790,
    "camera": {
      "id": 7600,
      "_id": "c4bdf281-abaa-4dd5-949b-b44aff184e7f",
      "bus": "usb0000001401",
      "fps": 24,
      "apps": [
        "am"
      ],
      "card": "HDR Camera",
      "coef": 170,
      "name": "Test HD Usb Cam",
      "type": 0,
      "uuid": "c4bdf281-abaa-4dd5-949b-b44aff184e7f",
      "index": 0,
      "width": 640,
      "height": 480,
      "source": "rtsp://rtsp-simple-server-P2I1E8:8554/c4bdf281-abaa-4dd5-949b-b44aff184e7f",
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "type_str": "usb",
      "fov_height_unit": "meters"
    },
    "date_created": "2023-11-09T07:17:16.034Z",
    "usecase_id": 1,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1009,
    "last_active_timestamp_v2": "2023-11-14T05:49:14.000Z",
    "device_id": 1635,
    "device_name": "signageliveedge-BOXER-6841M",
    "location": {
      "id": 790,
      "name": "Exit-1",
      "site_id": 540
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5605,
        "feeder_id": 7600,
        "app_id": 1,
        "config": null,
        "date_created": "2023-11-09T07:17:16.191037",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5605,
        "feeder_id": 7600,
        "app_id": 1,
        "config": null,
        "date_created": "2023-11-09T07:17:16.191037",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 7549,
    "vendor": null,
    "name": "lea-ubuntu-sensor",
    "description": null,
    "location_id": 1153,
    "camera": {
      "id": 7549,
      "_id": "80a4264e-1916-4b9f-8156-07a21158c327",
      "bus": "usb0000001405",
      "fps": 24,
      "_rev": "",
      "apps": [
        "journeys"
      ],
      "card": "C922 Pro Stream Webcam",
      "coef": 170,
      "name": "lea-ubuntu-sensor",
      "type": 0,
      "uuid": "80a4264e-1916-4b9f-8156-07a21158c327",
      "index": 0,
      "width": 1920,
      "height": 1080,
      "source": "rtsp://rtsp-simple-server-t8p2t2:8554/80a4264e-1916-4b9f-8156-07a21158c327",
      "status": 1,
      "fov_type": "Spotter",
      "is_added": true,
      "raw_source": "",
      "fov_height_unit": "meters"
    },
    "date_created": "2023-10-04T09:15:26.166Z",
    "usecase_id": 77,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1324,
    "last_active_timestamp_v2": "2023-10-12T01:47:57.000Z",
    "device_id": 1638,
    "device_name": "lea-ubuntu",
    "location": {
      "id": 1153,
      "name": "zonetest",
      "site_id": 921
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5550,
        "feeder_id": 7549,
        "app_id": 198,
        "config": null,
        "date_created": "2023-10-04T09:15:26.274146",
        "app": {
          "id": 198,
          "name": "Journeys",
          "description": "Journeys",
          "code": "journeys",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-journeys.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=XuehiOc1AedIeczH6%2FB3GyvAh8eLzmFARaxUWo0W2Us%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "journeys_event",
                "catch": "journeys_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": true,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": true,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Journeys.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5550,
        "feeder_id": 7549,
        "app_id": 198,
        "config": null,
        "date_created": "2023-10-04T09:15:26.274146",
        "app": {
          "id": 198,
          "name": "Journeys",
          "description": "Journeys",
          "code": "journeys",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-journeys.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=XuehiOc1AedIeczH6%2FB3GyvAh8eLzmFARaxUWo0W2Us%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "journeys_event",
                "catch": "journeys_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": true,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": true,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Journeys.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/lea-ubuntu-file-1696411001735-7547576.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=RKCAqrwENEoJyoQoL6wapa5Ppz7tGpM4es9uaaodq3s%3D",
        "feeder_id": 7549,
        "status": "Completed",
        "id": 8956
      }
    ]
  },
  {
    "id": 7391,
    "vendor": null,
    "name": "dtwindow",
    "description": "",
    "location_id": 1290,
    "camera": {
      "id": 7391,
      "_id": "a75dc717-0f4a-4c30-b828-4bcfd94b9ec0",
      "fps": 25,
      "_rev": "1-c068dcb8128feb74396ff83fbe850285",
      "apps": [
        "samdt"
      ],
      "coef": 170,
      "name": "dtwindow",
      "type": 1,
      "uuid": "a75dc717-0f4a-4c30-b828-4bcfd94b9ec0",
      "width": 1920,
      "height": 1080,
      "source": "rtsp://192.168.100.38:8558/dtwindow",
      "fov_type": "Spotter",
      "is_added": true,
      "fov_height_unit": "meters"
    },
    "date_created": "2023-07-27T10:59:07.643Z",
    "usecase_id": 74,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1008,
    "last_active_timestamp_v2": "2023-07-28T07:20:27.000Z",
    "device_id": 1628,
    "device_name": "ARGOBOOK-2",
    "location": {
      "id": 1290,
      "name": "Pullup Window",
      "site_id": 676
    },
    "updated_by": "arvin+test@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5363,
        "feeder_id": 7391,
        "app_id": 188,
        "config": null,
        "date_created": "2023-07-27T10:59:08.287084",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5363,
        "feeder_id": 7391,
        "app_id": 188,
        "config": null,
        "date_created": "2023-07-27T10:59:08.287084",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ARGOBOOK-2-file-1690516369630-418352620.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=0nIsnDQJjSgabPwjK3bTUOXac%2B%2F0DAp%2Bk7eNWqJSu0U%3D",
        "feeder_id": 7391,
        "status": "Completed",
        "id": 8720
      }
    ]
  },
  {
    "id": 7390,
    "vendor": null,
    "name": "dtmerge",
    "description": "",
    "location_id": 1292,
    "camera": {
      "id": 7390,
      "_id": "446686f8-45dc-4ead-9a01-5bb48cc59a8d",
      "fps": 25,
      "_rev": "1-e3444b7f1dcc0331b4822945d7b501ba",
      "apps": [
        "samdt"
      ],
      "coef": 170,
      "name": "dtmerge",
      "type": 1,
      "uuid": "446686f8-45dc-4ead-9a01-5bb48cc59a8d",
      "width": 1920,
      "height": 1080,
      "source": "rtsp://192.168.100.38:8558/dtmerge",
      "fov_type": "Spotter",
      "is_added": true,
      "fov_height_unit": "meters"
    },
    "date_created": "2023-07-27T10:57:52.185Z",
    "usecase_id": 74,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1008,
    "last_active_timestamp_v2": "2023-07-28T07:20:27.000Z",
    "device_id": 1628,
    "device_name": "ARGOBOOK-2",
    "location": {
      "id": 1292,
      "name": "Y Lane Merge",
      "site_id": 676
    },
    "updated_by": "arvin+test@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5362,
        "feeder_id": 7390,
        "app_id": 188,
        "config": null,
        "date_created": "2023-07-27T10:57:52.831392",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5362,
        "feeder_id": 7390,
        "app_id": 188,
        "config": null,
        "date_created": "2023-07-27T10:57:52.831392",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ARGOBOOK-2-file-1690516528785-282450832.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=btlIGcJCMLt8tVSRVrMSfaz80UVNZYQhyINZKzMnmIA%3D",
        "feeder_id": 7390,
        "status": "Completed",
        "id": 8721
      }
    ]
  },
  {
    "id": 7389,
    "vendor": null,
    "name": "dtorderpoint",
    "description": "",
    "location_id": 1293,
    "camera": {
      "id": 7389,
      "_id": "ccf454f8-46ad-42a9-bc03-c703c234f2ff",
      "fps": 25,
      "_rev": "1-92a451690f8ee2eeb37108f96bb5a770",
      "apps": [
        "samdt"
      ],
      "coef": 170,
      "name": "dtorderpoint",
      "type": 1,
      "uuid": "ccf454f8-46ad-42a9-bc03-c703c234f2ff",
      "width": 1920,
      "height": 1080,
      "source": "rtsp://192.168.100.38:8558/dtorderpoint",
      "fov_type": "Spotter",
      "is_added": true,
      "fov_height_unit": "meters"
    },
    "date_created": "2023-07-27T10:56:51.796Z",
    "usecase_id": 74,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1008,
    "last_active_timestamp_v2": "2023-07-28T07:20:27.000Z",
    "device_id": 1628,
    "device_name": "ARGOBOOK-2",
    "location": {
      "id": 1293,
      "name": "Order Point-Outside",
      "site_id": 676
    },
    "updated_by": "arvin+test@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5361,
        "feeder_id": 7389,
        "app_id": 188,
        "config": null,
        "date_created": "2023-07-27T10:56:52.445321",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5361,
        "feeder_id": 7389,
        "app_id": 188,
        "config": null,
        "date_created": "2023-07-27T10:56:52.445321",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ARGOBOOK-2-file-1690480427579-704984936.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=mciGImBo6jF31effzjuppN%2BWzSA6LxAtNwAPNGNbUjk%3D",
        "feeder_id": 7389,
        "status": "Completed",
        "id": 8718
      }
    ]
  },
  {
    "id": 7388,
    "vendor": null,
    "name": "dtoptail",
    "description": "",
    "location_id": 1291,
    "camera": {
      "id": 7388,
      "_id": "e9629420-a68d-48b4-8ef8-19dc41baac35",
      "fps": 25,
      "_rev": "1-1e765dd1e235b15950db7f98b55f69f1",
      "apps": [
        "samdt"
      ],
      "coef": 170,
      "name": "dtoptail",
      "type": 1,
      "uuid": "e9629420-a68d-48b4-8ef8-19dc41baac35",
      "width": 1920,
      "height": 1080,
      "source": "rtsp://192.168.100.38:8558/dtoptail",
      "fov_type": "Spotter",
      "is_added": true,
      "fov_height_unit": "meters"
    },
    "date_created": "2023-07-27T10:55:52.813Z",
    "usecase_id": 74,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1008,
    "last_active_timestamp_v2": "2023-07-28T07:20:27.000Z",
    "device_id": 1628,
    "device_name": "ARGOBOOK-2",
    "location": {
      "id": 1291,
      "name": "Drive Thru Lane-Outside",
      "site_id": 676
    },
    "updated_by": "arvin+test@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5360,
        "feeder_id": 7388,
        "app_id": 188,
        "config": null,
        "date_created": "2023-07-27T10:55:53.467642",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5360,
        "feeder_id": 7388,
        "app_id": 188,
        "config": null,
        "date_created": "2023-07-27T10:55:53.467642",
        "app": {
          "id": 188,
          "name": "SAM for Drive Thru",
          "description": "SAMDT",
          "code": "samdt",
          "source": "",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applet-sam-drivethru.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2Bi5S2U1E6c1HlMt2TOmcFY%2FaTl%2BMMkZaV2WCh1xET54%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": false,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana SAM DT",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ARGOBOOK-2-file-1690516746663-114849676.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=hshuhBYzMqzZ1krfbHozp84OmGN59PqbXhQOYF%2F2Xyo%3D",
        "feeder_id": 7388,
        "status": "Completed",
        "id": 8722
      }
    ]
  },
  {
    "id": 7175,
    "vendor": null,
    "name": "JEBB-CAM-2-AYAW-EDELETE",
    "description": null,
    "location_id": 965,
    "camera": {
      "id": 7175,
      "_id": "cc8cbfaf-6045-409d-a8eb-51cb24ac52b6",
      "fps": 25,
      "_rev": "1-4de1fd82085b724b09cf76101bb06ebf",
      "apps": [
        "pc"
      ],
      "coef": 170,
      "name": "JEBB-CAM-2-AYAW-EDELETE",
      "type": 1,
      "uuid": "cc8cbfaf-6045-409d-a8eb-51cb24ac52b6",
      "width": 1920,
      "height": 1080,
      "source": "rtsp://192.168.100.223:8554/pc_2",
      "is_added": true
    },
    "date_created": "2023-04-28T14:59:59.924Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1008,
    "last_active_timestamp_v2": "2023-05-17T13:47:14.000Z",
    "device_id": 1608,
    "device_name": "ubuntu06-JEBBTEST",
    "location": {
      "id": 965,
      "name": "Entrance",
      "site_id": 797
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5130,
        "feeder_id": 7175,
        "app_id": 7,
        "config": null,
        "date_created": "2023-04-28T15:00:00.565132",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5130,
        "feeder_id": 7175,
        "app_id": 7,
        "config": null,
        "date_created": "2023-04-28T15:00:00.565132",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ubuntu06-JEBBTEST-file-1682694059200-77822898.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=HaLfooTaqdM39Zp1tE14uKSaeJeAlJl36K1PKXDxCKM%3D",
        "feeder_id": 7175,
        "status": "Completed",
        "id": 8344
      }
    ]
  },
  {
    "id": 7174,
    "vendor": null,
    "name": "JEBB-CAM-1-AYAW-EDELETE",
    "description": "",
    "location_id": 965,
    "camera": {
      "id": 7174,
      "_id": "a5869d44-95db-4533-af07-2149f80b75d9",
      "fps": 24,
      "_rev": "1-e9e1a99e278e7960bbee3007abe2c0a3",
      "apps": [
        "pc"
      ],
      "coef": 170,
      "name": "JEBB-CAM-1-AYAW-EDELETE",
      "type": 1,
      "uuid": "a5869d44-95db-4533-af07-2149f80b75d9",
      "width": 1920,
      "height": 1080,
      "source": "rtsp://192.168.100.223:8554/pc_1",
      "is_added": true
    },
    "date_created": "2023-04-28T14:52:45.279Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": 1008,
    "last_active_timestamp_v2": "2023-05-17T13:47:14.000Z",
    "device_id": 1608,
    "device_name": "ubuntu06-JEBBTEST",
    "location": {
      "id": 965,
      "name": "Entrance",
      "site_id": 797
    },
    "updated_by": "arvin+test@meldcx.com",
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5129,
        "feeder_id": 7174,
        "app_id": 7,
        "config": null,
        "date_created": "2023-04-28T14:52:45.93767",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5129,
        "feeder_id": 7174,
        "app_id": 7,
        "config": null,
        "date_created": "2023-04-28T14:52:45.93767",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/ubuntu06-JEBBTEST-file-1682693626254-152537791.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Pp3DjL787qhkXXjKp6BahYr0VQ9ttkG5YQzHyEM%2FutM%3D",
        "feeder_id": 7174,
        "status": "Completed",
        "id": 8343
      }
    ]
  },
  {
    "id": 7021,
    "vendor": null,
    "name": "Jebb Cam",
    "description": null,
    "location_id": 803,
    "camera": {
      "id": 7021,
      "_id": "7aa37a76-af13-462b-bddd-36cda04c74b5",
      "bus": -1,
      "fps": 0,
      "xid": "cbc1m83q00007j4dkom0",
      "_rev": "2-f1ff59a51ab87ebaeef05f258c8ec9b6",
      "apps": [
        "pc",
        "ze",
        "am",
        "se",
        "tram"
      ],
      "coef": 170,
      "name": "Jebb CAM",
      "path": "",
      "port": -1,
      "type": 1,
      "uuid": "7aa37a76-af13-462b-bddd-36cda04c74b5",
      "width": 1920,
      "height": 1080,
      "source": "U2FsdGVkX1/0bHl4DLsf+5SXiend4wd/3V985/plROQmapVCflln20+M8Y/rnFbM",
      "status": 1,
      "location": "",
      "container": "",
      "attributes": "{\\\"ip\\\":\\\"192.168.2.40\\\",\\\"port\\\":\\\"9000\\\",\\\"model\\\":\\\"\\\",\\\"endpoint\\\":\\\"/live\\\"}",
      "bcast_port": 8554,
      "stream_type": "rtsp"
    },
    "date_created": "2023-04-12T04:02:08.138Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": null,
    "last_active_timestamp_v2": "2022-07-21T03:53:14.000Z",
    "device_id": 1614,
    "device_name": "JEBBDeviceAYAWEDELETE",
    "location": {
      "id": 803,
      "name": "main street",
      "site_id": 676
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": null,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 4955,
        "feeder_id": 7021,
        "app_id": 145,
        "config": null,
        "date_created": "2023-04-12T04:05:07.345305",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4956,
        "feeder_id": 7021,
        "app_id": 1,
        "config": null,
        "date_created": "2023-04-12T04:05:07.528088",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4957,
        "feeder_id": 7021,
        "app_id": 7,
        "config": null,
        "date_created": "2023-04-12T04:05:07.693204",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4958,
        "feeder_id": 7021,
        "app_id": 9,
        "config": null,
        "date_created": "2023-04-12T04:05:07.860677",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 4955,
        "feeder_id": 7021,
        "app_id": 145,
        "config": null,
        "date_created": "2023-04-12T04:05:07.345305",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4956,
        "feeder_id": 7021,
        "app_id": 1,
        "config": null,
        "date_created": "2023-04-12T04:05:07.528088",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4957,
        "feeder_id": 7021,
        "app_id": 7,
        "config": null,
        "date_created": "2023-04-12T04:05:07.693204",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4958,
        "feeder_id": 7021,
        "app_id": 9,
        "config": null,
        "date_created": "2023-04-12T04:05:07.860677",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 6945,
    "vendor": null,
    "name": "Karl Cam",
    "description": null,
    "location_id": 783,
    "camera": {
      "id": 6945,
      "_id": "7aa37a79-af13-462b-bddd-36cda04c74b5",
      "bus": -1,
      "fps": 0,
      "xid": "cbc1m83q00007j4dkom0",
      "_rev": "2-f1ff59a51ab87ebaeef05f258c8ec9b9",
      "apps": [
        "am",
        "tram"
      ],
      "coef": 170,
      "name": "Karl Cam",
      "path": "",
      "port": -1,
      "type": 1,
      "uuid": "7aa37a79-af13-462b-bddd-36cda04c74b5",
      "width": 1920,
      "height": 1080,
      "source": "U2FsdGVkX1/0bHl4DLsf+5SXiend4wd/3V985/plROQmapVCflln20+M8Y/rnFbM",
      "status": 1,
      "location": "",
      "container": "",
      "attributes": "{\\\"ip\\\":\\\"192.168.2.40\\\",\\\"port\\\":\\\"9000\\\",\\\"model\\\":\\\"\\\",\\\"endpoint\\\":\\\"/live\\\"}",
      "bcast_port": 8554,
      "stream_type": "rtsp"
    },
    "date_created": "2023-03-21T03:41:52.510Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": null,
    "last_active_timestamp_v2": "2023-05-30T08:55:08.000Z",
    "device_id": 1612,
    "device_name": "KarlDevice-Dummy",
    "location": {
      "id": 783,
      "name": "zone with floor",
      "site_id": 676
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": 1,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 5203,
        "feeder_id": 6945,
        "app_id": 1,
        "config": null,
        "date_created": "2023-05-30T08:54:07.002852",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 5204,
        "feeder_id": 6945,
        "app_id": 9,
        "config": null,
        "date_created": "2023-05-30T08:54:07.199943",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 5203,
        "feeder_id": 6945,
        "app_id": 1,
        "config": null,
        "date_created": "2023-05-30T08:54:07.002852",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 5204,
        "feeder_id": 6945,
        "app_id": 9,
        "config": null,
        "date_created": "2023-05-30T08:54:07.199943",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": null
  },
  {
    "id": 6944,
    "vendor": null,
    "name": "Shan Cam 2",
    "description": null,
    "location_id": 803,
    "camera": {
      "id": 6861,
      "_id": "7aa37a79-af13-462b-bddd-36cda04c74b5",
      "bus": -1,
      "fps": 0,
      "xid": "cbc1m83q00007j4dkom0",
      "_rev": "2-f1ff59a51ab87ebaeef05f258c8ec9b9",
      "apps": [
        "pc",
        "ze"
      ],
      "coef": 170,
      "name": "SHAN CAM PC ZE",
      "path": "",
      "port": -1,
      "type": 1,
      "uuid": "7aa37a79-af13-462b-bddd-36cda04c74b5",
      "width": 1920,
      "height": 1080,
      "source": "U2FsdGVkX1/0bHl4DLsf+5SXiend4wd/3V985/plROQmapVCflln20+M8Y/rnFbM",
      "status": 1,
      "location": "",
      "container": "",
      "attributes": "{\\\"ip\\\":\\\"192.168.2.40\\\",\\\"port\\\":\\\"9000\\\",\\\"model\\\":\\\"\\\",\\\"endpoint\\\":\\\"/live\\\"}",
      "bcast_port": 8554,
      "stream_type": "rtsp"
    },
    "date_created": "2023-03-20T10:58:46.168Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": null,
    "last_active_timestamp_v2": "2022-07-21T03:53:14.000Z",
    "device_id": 1523,
    "device_name": "SHANDeviceAYAWEDELETE",
    "location": {
      "id": 803,
      "name": "main street",
      "site_id": 676
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": null,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 4870,
        "feeder_id": 6944,
        "app_id": 7,
        "config": null,
        "date_created": "2023-03-20T11:02:33.529812",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4871,
        "feeder_id": 6944,
        "app_id": 145,
        "config": null,
        "date_created": "2023-03-20T11:02:33.692659",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 4870,
        "feeder_id": 6944,
        "app_id": 7,
        "config": null,
        "date_created": "2023-03-20T11:02:33.529812",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4871,
        "feeder_id": 6944,
        "app_id": 145,
        "config": null,
        "date_created": "2023-03-20T11:02:33.692659",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/SHANDeviceAYAWEDELETE-file-1689345297777-301459682.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=d3HypBhUeio4q44AZufHRY35wye%2FQ4J0yetMV%2BchIks%3D",
        "feeder_id": 6944,
        "status": "Completed",
        "id": 8681
      }
    ]
  },
  {
    "id": 6861,
    "vendor": null,
    "name": "Shan Cam",
    "description": null,
    "location_id": 803,
    "camera": {
      "id": 6861,
      "_id": "7aa37a76-af13-462b-bddd-36cda04c74b5",
      "bus": -1,
      "fps": 0,
      "xid": "cbc1m83q00007j4dkom0",
      "_rev": "2-f1ff59a51ab87ebaeef05f258c8ec9b6",
      "apps": [
        "pc",
        "ze",
        "am",
        "se",
        "tram"
      ],
      "coef": 170,
      "name": "SHAN CAM",
      "path": "",
      "port": -1,
      "type": 1,
      "uuid": "7aa37a76-af13-462b-bddd-36cda04c74b5",
      "width": 1920,
      "height": 1080,
      "source": "U2FsdGVkX1/0bHl4DLsf+5SXiend4wd/3V985/plROQmapVCflln20+M8Y/rnFbM",
      "status": 1,
      "location": "",
      "container": "",
      "attributes": "{\\\"ip\\\":\\\"192.168.2.40\\\",\\\"port\\\":\\\"9000\\\",\\\"model\\\":\\\"\\\",\\\"endpoint\\\":\\\"/live\\\"}",
      "bcast_port": 8554,
      "stream_type": "rtsp"
    },
    "date_created": "2023-02-14T05:22:38.380Z",
    "usecase_id": 5,
    "network_id": 14,
    "is_active": true,
    "serial_id": null,
    "api_key": "",
    "status": "offline",
    "device_model": null,
    "created_by": null,
    "last_active_timestamp_v2": "2022-07-21T03:53:14.000Z",
    "device_id": 1523,
    "device_name": "SHANDeviceAYAWEDELETE",
    "location": {
      "id": 803,
      "name": "main street",
      "site_id": 676
    },
    "updated_by": null,
    "disconnect_flag": null,
    "identity_id": null,
    "identity_name": "edge",
    "is_updated": 1,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
      {
        "id": 4769,
        "feeder_id": 6861,
        "app_id": 9,
        "config": null,
        "date_created": "2023-02-14T05:23:25.595688",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4770,
        "feeder_id": 6861,
        "app_id": 7,
        "config": null,
        "date_created": "2023-02-14T05:23:25.770644",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4771,
        "feeder_id": 6861,
        "app_id": 145,
        "config": null,
        "date_created": "2023-02-14T05:23:25.942984",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4772,
        "feeder_id": 6861,
        "app_id": 1,
        "config": null,
        "date_created": "2023-02-14T05:23:26.112705",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4773,
        "feeder_id": 6861,
        "app_id": 194,
        "config": null,
        "date_created": "2023-02-14T05:25:36.359184",
        "app": {
          "id": 194,
          "name": "Shelf Engagement",
          "description": "Shelf Engagement",
          "code": "se",
          "source": "https://viana2.blob.core.windows.net/bin/se/staging/se.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2BtA8r4i%2BJKn9etDPTpEOGiX0BClIZXNO5TRU9uoC5gw%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-shelf-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=eElKLwdGpcV7fp%2F0Wwci0Fr5Rr0tIIBEC5nxixWSRPU%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "se_event",
                "catch": "se_event_catch",
                "activated": true
              },
              {
                "send": "shelfbody_event",
                "catch": "shelfbody_event_catch",
                "activated": true
              },
              {
                "send": "shelftouch_event",
                "catch": "shelftouch_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.00",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7014,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "threshold",
                "type": 1
              }
            ],
            "has_download_csv": true,
            "description_cover": "Shelf Engagement",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "apps": [
      {
        "id": 4769,
        "feeder_id": 6861,
        "app_id": 9,
        "config": null,
        "date_created": "2023-02-14T05:23:25.595688",
        "app": {
          "id": 9,
          "name": "Traffic Measurement",
          "description": "Track vehicles and measure parking utilisation for improved traffic management.",
          "code": "tram",
          "source": "https://viana2.blob.core.windows.net/bin/tram/staging/tram.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1cIYmqIeyckNNMyvVFPV1dBMFeiku5RhNWfv4%2FUKJ74%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Ji8f8lJOg78l6pClqmACovs2bdzp2AxKKSp5GDyBQwM%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/tram.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=f9AJad2TV%2BLx8PNRZRoIfsQv%2BR4q7Du19hdhsp8EHZs%3D",
            "scene": true,
            "events": [
              {
                "send": "tram_event",
                "catch": "tram_event_catch",
                "activated": true
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.0",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7004,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Triplines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              },
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Zones"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Viana Traffic Measurement uses advanced vision AI to track vehicle license plates  and capture traffic data such as entry and exit time, parking count and occupancy, visit duration.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ],
            "VIANA_TRAM_LPR_API_KEY": "d0f64d3e4509e257eb8a93b604f38c9c6c596c48"
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4770,
        "feeder_id": 6861,
        "app_id": 7,
        "config": null,
        "date_created": "2023-02-14T05:23:25.770644",
        "app": {
          "id": 7,
          "name": "People Counting",
          "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
          "code": "pc",
          "source": "https://viana2.blob.core.windows.net/bin/pcv2/staging/pc.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=1wSV7De%2FlQJbOpg4NJicFkXUAscB8d1Xy8dTckHwGN8%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=w%2BdSkNvbZlwablLlkywnyfqQzalm5iR62p%2Fx4E71wiE%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=D%2Fi67qv0yJk4l%2B%2BFoSe22%2FyBq8iqo8yGIAvZhVWCIHo%3D",
            "scene": true,
            "events": [
              {
                "send": "peoplecount_event",
                "catch": "peoplecount_catch",
                "activated": false
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "tripline",
                "type": 0,
                "description": "Trip Lines"
              },
              {
                "name": "direction",
                "type": 5,
                "description": "Directions"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
            "is_service_applet": true,
            "platform_supported": [
              "edgeless",
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.423137"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4771,
        "feeder_id": 6861,
        "app_id": 145,
        "config": null,
        "date_created": "2023-02-14T05:23:25.942984",
        "app": {
          "id": 145,
          "name": "Zone Engagement",
          "description": "Track footfall traffic and human activity in specific zones to measure engagement of customers.",
          "code": "ze",
          "source": "https://viana2.blob.core.windows.net/bin/ze/staging/ze.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=pQfLfUNOKe%2FtkCjx5Lmup%2Bi2lK7ftag4h93ZppGsbfU%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-zone-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=BzCfHMr7At4KGi%2BswrJOK73jEqTr0VPiSZm9qtK5r6M%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "ze_event",
                "catch": "ze_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "overlaps": true,
            "floorplan": true,
            "local_api": {
              "port": 7003,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "zone",
                "type": 4,
                "is_global": true,
                "description": "Active Regions"
              },
              {
                "name": "floorplan_zone",
                "type": 9,
                "is_global": false,
                "description": "Active Regions"
              },
              {
                "name": "destination",
                "type": 6,
                "is_global": false,
                "description": "Destinations"
              },
              {
                "name": "cornerpin",
                "type": 7,
                "is_global": false,
                "description": "Corner Pins"
              },
              {
                "name": "destination_beta",
                "type": 10,
                "is_global": false,
                "description": "Destinations (Beta)"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Track footfall traffic and human activity in specific zones to measure engagement of customers and customer segments in these zones, with data such as dwell times, demographics, and more.",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4772,
        "feeder_id": 6861,
        "app_id": 1,
        "config": null,
        "date_created": "2023-02-14T05:23:26.112705",
        "app": {
          "id": 1,
          "name": "Audience Measurement",
          "description": "Anonymously detect people - converting human data to metric data.",
          "code": "am",
          "source": "https://viana2.blob.core.windows.net/bin/amv3/staging/am.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=Q0uinqS70t%2F1uVnQFaceaqlr6T9ReezzrUnE1XyFVig%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=sMBVZdiNZ3pZJe6yrJ40q4J%2BjpESXl8997%2Fz%2BFxcKao%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/am.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=UW9OsUCoIoRRmjjE3QcxHhy5RQR3O4De%2B5CnhDYtK1E%3D",
            "scene": true,
            "events": [
              {
                "send": "watcher_event",
                "catch": "watcher_catch",
                "activated": false
              },
              {
                "send": "coatro_event",
                "catch": "coatro_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.02",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7001,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [],
            "active_regions": [
              {
                "name": "inclusion",
                "type": 2,
                "description": "Zones"
              },
              {
                "name": "exclusion",
                "type": 3,
                "description": "Masks"
              },
              {
                "name": "distance",
                "type": 8,
                "description": "Distance"
              }
            ],
            "has_download_csv": true,
            "description_cover": "Uses vision AI technology for high-performance face mapping and detection, that extracts and converts human data to metric data.",
            "is_service_applet": true,
            "platform_supported": [
              "edge"
            ]
          },
          "date_created": "2020-11-30T10:31:16.251269"
        },
        "feeder_app_attributes": []
      },
      {
        "id": 4773,
        "feeder_id": 6861,
        "app_id": 194,
        "config": null,
        "date_created": "2023-02-14T05:25:36.359184",
        "app": {
          "id": 194,
          "name": "Shelf Engagement",
          "description": "Shelf Engagement",
          "code": "se",
          "source": "https://viana2.blob.core.windows.net/bin/se/staging/se.7z?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=%2BtA8r4i%2BJKn9etDPTpEOGiX0BClIZXNO5TRU9uoC5gw%3D",
          "config": {
            "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-shelf-engagement.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=eElKLwdGpcV7fp%2F0Wwci0Fr5Rr0tIIBEC5nxixWSRPU%3D",
            "type": "edge",
            "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/ze.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VgLBZFwfWE7peQNQ%2BAVRylHBcPZtqlKs0zAj1AszgUo%3D",
            "scene": true,
            "events": [
              {
                "send": "se_event",
                "catch": "se_event_catch",
                "activated": true
              },
              {
                "send": "shelfbody_event",
                "catch": "shelfbody_event_catch",
                "activated": true
              },
              {
                "send": "shelftouch_event",
                "catch": "shelftouch_event_catch",
                "activated": true
              }
            ],
            "hidden": false,
            "is_edge": true,
            "is_main": false,
            "version": "1.00",
            "category": "service-applet",
            "floorplan": true,
            "local_api": {
              "port": 7014,
              "stream": "/feed/",
              "hostname": "localhost"
            },
            "is_default": false,
            "configurables": [
              {
                "name": "capacity",
                "type": "floorplan",
                "category": "capacity"
              },
              {
                "name": "capacity",
                "type": "zone",
                "category": "capacity"
              },
              {
                "name": "starting_count",
                "type": "zone",
                "category": "adjustment"
              },
              {
                "name": "starting_count",
                "type": "floorplan",
                "category": "adjustment"
              }
            ],
            "active_regions": [
              {
                "name": "threshold",
                "type": 1
              }
            ],
            "has_download_csv": true,
            "description_cover": "Shelf Engagement",
            "is_service_applet": true,
            "platform_supported": [
              "edge",
              "edgeless"
            ]
          },
          "date_created": "2021-10-27T09:00:34.641"
        },
        "feeder_app_attributes": []
      }
    ],
    "feeder_assets": [
      {
        "asset": "https://viana2.blob.core.windows.net/staging/SHANDeviceAYAWEDELETE-file-1708668114088-824545031.png?sv=2024-05-04&st=2025-01-20T06%3A34%3A16Z&se=2025-01-20T14%3A34%3A16Z&sr=b&sp=rw&sig=VyGQQ%2FFLDr7jmi7fj5YTMZ8bhLuJAXILpIR%2FrSp1POk%3D",
        "feeder_id": 6861,
        "status": "Completed",
        "id": 9527
      }
    ]
  }
];

const SceneEditor_SceneDebugger: React.FC = () => {

  const { loadScene, clearScene, saveScene } = useSceneEditorContext();

  const handleLoadSceneSubmit = (e: FormEvent) => {
    e.preventDefault();

    const inputSceneObj = JSON.parse(e.target?.inputScene?.value);
    const inputFeedersArr = JSON.parse(e.target?.inputFeeders?.value);
    loadScene(true, inputSceneObj, inputFeedersArr);
  };

  const clearSceneF = () => {
    clearScene();
  };

  const [outputScene, setOutputScene] = useState<string>('');
  const generateOutputSceneF = () => {
    setOutputScene(JSON.stringify(saveScene(), '' , 2))
  };

  return (
    <section>
      <h3>Debugger</h3>
      
      <div style={{ marginBottom: '1rem' }}>
        <form onSubmit={handleLoadSceneSubmit} autoComplete='off'>
          <div style={{ float: 'left' }}>
            <label htmlFor='inputScene'>Scene</label>
            <textarea id='inputScene' name='inputScene' rows={20} style={{ width: '500px', display: 'block' }} defaultValue={JSON.stringify(sampleScene, '' , 2)} />
          </div>
          <div style={{ float: 'left' }}>
            <label htmlFor='inputFeeders'>Feeders</label>
            <textarea id='inputFeeders' name='inputFeeders' rows={20} style={{ width: '500px', display: 'block' }} defaultValue={JSON.stringify(sampleFeeders, '' , 2)} />
          </div>
          <div style={{ clear: 'both' }}>
            <button type='submit'>Load Scene</button>
            <button type='button' onClick={clearSceneF}>Clear Scene</button>
          </div>
        </form>
      </div>

      <div>
        <textarea id='outputScene' name='outputScene' rows={10} style={{ width: '500px', display: 'block' }} value={outputScene} readOnly />
        <button type='button' onClick={generateOutputSceneF}>Save Scene</button>
      </div>
    </section>
  )
};

export default SceneEditor_SceneDebugger;