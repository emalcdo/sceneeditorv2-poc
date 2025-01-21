import React, { FormEvent, useState } from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';

const sampleScene1 = {
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
              "asset": "https://viana2.blob.core.windows.net/staging/flatten-images/flatten/flatten-1732857392523-axis_snapshot_1732857204811_62547.png?sv=2024-05-04&st=2025-01-21T00%3A58%3A55Z&se=2025-01-21T08%3A58%3A55Z&sr=b&sp=rw&sig=TwN156cAVTViEpnobMRI84PuBLYASPuL2WoFVoHDUso%3D",
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
const sampleScene2 = {
  "id": 2653,
  "name": "Scene PC Angled",
  "description": "PC Angled",
  "network_id": 9,
  "feeder_id": 3860,
  "date_created": "2024-12-18T06:00:41.660Z",
  "assigned_to": null,
  "created_by": null,
  "is_active": true,
  "points": null,
  "site_id": 441,
  "feeder": {
      "id": 3860,
      "name": "PC Angled",
      "camera": {
          "Name": "PC Angled"
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
      "usecase": "pc",
      "identity": {
          "id": 2,
          "name": "edgeless"
      },
      "is_active": true,
      "description": "",
      "feeder_apps": [
          {
              "id": 3212,
              "app_id": 7,
              "app_code": "pc",
              "feeder_id": 3860
          }
      ],
      "feeder_asset": [
          {
              "id": 5893,
              "asset": "https://viana2.blob.core.windows.net/production/axis_snapshot_1737100614605_32053.png?sv=2024-05-04&st=2025-01-21T07%3A34%3A01Z&se=2025-01-21T15%3A34%3A01Z&sr=b&sp=rw&sig=HUP9Jh766nLw%2BTW%2FCz0gPkQ06EBpcfUZHZdFiuaN2NQ%3D",
              "config": {},
              "feeder_id": 3860
          }
      ]
  },
  "regions": [
      {
          "id": 4203,
          "name": "New Trip Line",
          "description": null,
          "network_id": 9,
          "scene_id": 2653,
          "features": {
              "type": 0,
              "inversed": false,
              "thickness": 20,
              "sort_order": 1
          },
          "points": [
              [
                  108.69983841622958,
                  153.8869482140742
              ],
              [
                  301.04782452069503,
                  149.9579359592421
              ]
          ],
          "color_hm": null,
          "contact_threshold": "0",
          "cleanuptime_threshold": "0",
          "cleanuptime_unit_threshold": null,
          "proximity_threshold": "0",
          "date_created": "2025-01-17T06:52:43.657",
          "assigned_to": null,
          "created_by": 1764,
          "is_active": true,
          "preset_id": null,
          "sla_time": "0",
          "sla_time_unit": "0",
          "doorway_id": null,
          "location_id": null,
          "app": "pc",
          "usecase": "pc",
          "app_id": 7,
          "usecase_id": 5,
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
      }
  ],
  "status": "active",
  "status_id": 1
};

const sampleFeeders1 = [
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
  }
];
const sampleFeeders2 = [
  {
    "id": 3860,
    "vendor": "axis",
    "name": "PC Angled",
    "description": "",
    "location_id": 1087,
    "camera": {
        "name": "PC Angled",
        "width": 1920,
        "height": 1080,
        "fov_type": "Spotter"
    },
    "date_created": "2024-12-18T06:00:35.729Z",
    "usecase_id": 5,
    "network_id": 9,
    "is_active": true,
    "serial_id": "B8A44F93F556",
    "api_key": "",
    "status": "online",
    "device_model": "Q3538-LVE",
    "created_by": 0,
    "last_active_timestamp_v2": "2025-01-21T07:33:59.629Z",
    "device_id": null,
    "device_name": null,
    "feeder_tags": null,
    "feeder_attributes": [],
    "sensor_apps": [
        {
            "id": 3212,
            "feeder_id": 3860,
            "app_id": 7,
            "config": null,
            "date_created": "2024-12-18T06:15:22.525813",
            "app": {
                "id": 7,
                "name": "People Counting",
                "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
                "code": "pc",
                "source": "https://viana2.blob.core.windows.net/bin/pc/prod/pc.7z?sv=2024-05-04&st=2025-01-21T07%3A34%3A01Z&se=2025-01-21T15%3A34%3A01Z&sr=b&sp=rw&sig=AlTHe%2BBKQvX13LC%2FiHrGqeziLoBVlt56zArgPf9xlVo%3D",
                "config": {
                    "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-21T07%3A34%3A01Z&se=2025-01-21T15%3A34%3A01Z&sr=b&sp=rw&sig=WGaOL9TehkXzgIn2f0Hc3Xg4JPosCrI%2FQDN9uDdjF18%3D",
                    "type": "edge",
                    "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-21T07%3A34%3A01Z&se=2025-01-21T15%3A34%3A01Z&sr=b&sp=rw&sig=p5JXLSoAqOdIggJYOU%2FRI73h3b8fUjLrNlbDu%2BjRXyk%3D",
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
                    "version": "1.0",
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
                            "name": "tripline",
                            "type": 0
                        },
                        {
                            "name": "direction",
                            "type": 5
                        }
                    ],
                    "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
                    "is_service_applet": true,
                    "platform_supported": [
                        "edgeless",
                        "edge"
                    ]
                },
                "date_created": "2021-04-21T10:04:44.012"
            },
            "feeder_app_attributes": []
        }
    ],
    "apps": [
        {
            "id": 3212,
            "feeder_id": 3860,
            "app_id": 7,
            "config": null,
            "date_created": "2024-12-18T06:15:22.525813",
            "app": {
                "id": 7,
                "name": "People Counting",
                "description": "Count people in high foot traffic areas to measure occupancy and staffing efficiency.",
                "code": "pc",
                "source": "https://viana2.blob.core.windows.net/bin/pc/prod/pc.7z?sv=2024-05-04&st=2025-01-21T07%3A34%3A01Z&se=2025-01-21T15%3A34%3A01Z&sr=b&sp=rw&sig=AlTHe%2BBKQvX13LC%2FiHrGqeziLoBVlt56zArgPf9xlVo%3D",
                "config": {
                    "logo": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/viana-service-applets-people-count.png?sv=2024-05-04&st=2025-01-21T07%3A34%3A01Z&se=2025-01-21T15%3A34%3A01Z&sr=b&sp=rw&sig=WGaOL9TehkXzgIn2f0Hc3Xg4JPosCrI%2FQDN9uDdjF18%3D",
                    "type": "edge",
                    "cover": "https://viana2.blob.core.windows.net/production/asset-serviceapplets/covers/pc.png?sv=2024-05-04&st=2025-01-21T07%3A34%3A01Z&se=2025-01-21T15%3A34%3A01Z&sr=b&sp=rw&sig=p5JXLSoAqOdIggJYOU%2FRI73h3b8fUjLrNlbDu%2BjRXyk%3D",
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
                    "version": "1.0",
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
                            "name": "tripline",
                            "type": 0
                        },
                        {
                            "name": "direction",
                            "type": 5
                        }
                    ],
                    "description_cover": "Monitors public spaces with ease. It features people counting to determine occupancy, and detects social distancing and face masks, allowing property managers to ensure staff and visitor safety.",
                    "is_service_applet": true,
                    "platform_supported": [
                        "edgeless",
                        "edge"
                    ]
                },
                "date_created": "2021-04-21T10:04:44.012"
            },
            "feeder_app_attributes": []
        }
    ],
    "feeder_assets": [
        {
            "asset": "https://viana2.blob.core.windows.net/production/axis_snapshot_1737100614605_32053.png?sv=2024-05-04&st=2025-01-21T07%3A34%3A01Z&se=2025-01-21T15%3A34%3A01Z&sr=b&sp=rw&sig=HUP9Jh766nLw%2BTW%2FCz0gPkQ06EBpcfUZHZdFiuaN2NQ%3D",
            "feeder_id": 3860,
            "status": "Completed",
            "id": 5893
        }
    ],
    "location": {
        "id": 1087,
        "name": "RED Lite A",
        "site_id": 441
    },
    "updated_by": "yves@skunkworks.ai",
    "disconnect_flag": true,
    "identity_id": 2,
    "identity_name": "edgeless",
    "is_updated": 1
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
            <textarea id='inputScene' name='inputScene' rows={20} style={{ width: '500px', display: 'block' }} defaultValue={JSON.stringify(sampleScene1, '' , 2)} />
          </div>
          <div style={{ float: 'left' }}>
            <label htmlFor='inputFeeders'>Feeders []</label>
            <textarea id='inputFeeders' name='inputFeeders' rows={20} style={{ width: '500px', display: 'block' }} defaultValue={JSON.stringify(sampleFeeders1, '' , 2)} />
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