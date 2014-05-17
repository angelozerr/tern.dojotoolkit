(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("dojo", function(server, options) {
    server._dojo = {};
    return {
      defs : defs
    };
  });

  var defs = {
      "!name": "dojo",
      "!define": {
       "dijit": {
        "CheckedMenuItem": {},
        "ColorPalette": {
         "_palettes": {},
         "_imagePaths": {},
         "_paletteCoords": {},
         "_paletteDims": {
          "7x10": {},
          "3x4": {}
         }
        },
        "Declaration": {},
        "Dialog": {},
        "DialogUnderlay": {
         "attributeMap": {}
        },
        "Editor": {},
        "_editor": {
         "_Plugin": {},
         "RichText": {},
         "plugins": {
          "AlwaysShowToolbar": {},
          "EnterKeyHandling": {},
          "FontChoice": {},
          "LinkDialog": {},
          "TabIndent": {},
          "TextColor": {},
          "ToggleDir": {}
         },
         "selection": {}
        },
        "InlineEditBox": {},
        "_InlineEditor": {},
        "_MenuBase": {},
        "Menu": {},
        "MenuBar": {},
        "_MenuBarItemMixin": {},
        "MenuBarItem": {},
        "MenuItem": {},
        "MenuSeparator": {},
        "PopupMenuBarItem": {},
        "PopupMenuItem": {},
        "ProgressBar": {},
        "TitlePane": {},
        "Toolbar": {},
        "ToolbarSeparator": {},
        "_MasterTooltip": {},
        "Tooltip": {},
        "TooltipDialog": {},
        "_TreeNode": {},
        "Tree": {},
        "Calendar": {},
        "_Contained": {},
        "_Container": {},
        "_DialogMixin": {},
        "_KeyNavContainer": {},
        "_Widget": {
         "attributeMap": {},
         "_deferredConnects": {},
         "prototype": {}
        },
        "_Templated": {},
        "_TimePicker": {
         "__Constraints": {}
        },
        "_base": {},
        "WidgetSet": {},
        "_tabElements": {},
        "BackgroundIframe": {},
        "popup": {},
        "typematic": {},
        "wai": {},
        "range": {
         "W3CRange": {},
         "ie": {}
        },
        "_tree": {},
        "form": {
         "Button": {},
         "DropDownButton": {},
         "ComboButton": {},
         "ToggleButton": {},
         "CheckBox": {},
         "RadioButton": {},
         "_ComboBoxDataStore": {},
         "ComboBoxMixin": {},
         "_ComboBoxMenu": {},
         "ComboBox": {},
         "CurrencyTextBox": {
          "__Constraints": {}
         },
         "DateTextBox": {},
         "FilteringSelect": {},
         "Form": {},
         "HorizontalRule": {},
         "HorizontalRuleLabels": {
          "constraints": {}
         },
         "HorizontalSlider": {},
         "_SliderMover": {},
         "MappedTextBox": {},
         "MultiSelect": {},
         "NumberSpinner": {},
         "NumberTextBox": {
          "__Constraints": {}
         },
         "NumberTextBoxMixin": {
          "editOptions": {}
         },
         "RangeBoundTextBox": {},
         "SimpleTextarea": {},
         "TextBox": {},
         "Textarea": {},
         "TimeTextBox": {
          "__Constraints": {}
         },
         "ValidationTextBox": {},
         "VerticalRule": {},
         "VerticalRuleLabels": {},
         "VerticalSlider": {},
         "_DateTimeTextBox": {
          "__Constraints": {}
         },
         "_FormMixin": {},
         "_FormWidget": {},
         "_FormValueWidget": {},
         "_Spinner": {},
         "_SliderMoverMax": {},
         "_SliderBarMover": {}
        },
        "layout": {
         "AccordionContainer": {},
         "_AccordionButton": {},
         "AccordionPane": {},
         "BorderContainer": {},
         "_Splitter": {},
         "_Gutter": {},
         "ContentPane": {},
         "LayoutContainer": {},
         "LinkPane": {},
         "SplitContainer": {},
         "StackContainer": {},
         "StackController": {},
         "_StackButton": {},
         "TabContainer": {},
         "TabController": {},
         "_TabButton": {},
         "_LayoutWidget": {}
        },
        "tree": {
         "ForestStoreModel": {},
         "TreeStoreModel": {},
         "_dndContainer": {},
         "_dndSelector": {},
         "dndSource": {},
         "model": {}
        }
       },
       "dojo": {
        "string": {},
        "date": {
         "stamp": {},
         "locale": {}
        },
        "doc": {
         "documentElement": {
          "style": {}
         }
        },
        "dnd": {
         "Avatar": {},
         "Container": {},
         "_defaultCreatorNodes": {},
         "Manager": {},
         "Moveable": {},
         "Mover": {},
         "Selector": {},
         "Source": {},
         "Target": {},
         "AutoSource": {},
         "TimedMoveable": {},
         "_validNodes": {},
         "_validOverflow": {},
         "move": {
          "constrainedMoveable": {},
          "boxConstrainedMoveable": {},
          "parentConstrainedMoveable": {}
         }
        },
        "AdapterRegistry": {},
        "DeferredList": {},
        "NodeList": {
         "attr": {},
         "style": {},
         "addContent": {}
        },
        "Color": {
         "named": {}
        },
        "_base": {
         "_loader": {}
        },
        "Deferred": {},
        "version": {},
        "config": {},
        "_modulePrefixes": {
         "dojo": {},
         "doh": {},
         "tests": {}
        },
        "_Url": {},
        "_listener": {},
        "declare": {
         "_core": {}
        },
        "_event_listener": {
         "_punctMap": {}
        },
        "keys": {},
        "_ie_listener": {},
        "Animation": {},
        "__AnimArgs": {},
        "_Line": {},
        "__XhrArgs": {},
        "_contentHandlers": {},
        "_firebug": {},
        "back": {},
        "cldr": {
         "monetary": {},
         "supplemental": {}
        },
        "colors": {},
        "cookie": {},
        "currency": {
         "__ParseOptions": {}
        },
        "data": {
         "ItemFileReadStore": {},
         "ItemFileWriteStore": {},
         "api": {
          "Identity": {},
          "Notification": {},
          "Read": {},
          "Request": {},
          "Write": {}
         },
         "util": {
          "filter": {},
          "simpleFetch": {},
          "sorter": {}
         }
        },
        "fx": {
         "Toggler": {},
         "easing": {}
        },
        "gears": {},
        "html": {
         "_ContentSetter": {}
        },
        "i18n": {},
        "io": {
         "iframe": {
          "__ioArgs": {}
         },
         "script": {
          "__ioArgs": {}
         }
        },
        "number": {},
        "regexp": {},
        "rpc": {
         "JsonService": {},
         "JsonpService": {},
         "RpcService": {}
        }
       },
       "doh": {
        "robot": {}
       },
       "Expr": {
        "order": {}
       },
       "window": {
        "console": {},
        "location": {},
        "frames": {
         "dj_history": {}
        },
        "event": {
         "srcElement": {}
        }
       },
       "document": {
        "body": {
         "style": {}
        }
       },
       "dojox": {
        "analytics": {
         "Urchin": {},
         "plugins": {}
        },
        "atom": {
         "io": {
          "Connection": {},
          "model": {
           "Node": {},
           "AtomItem": {},
           "Category": {},
           "Content": {},
           "Link": {},
           "Person": {
            "_accepts": {}
           },
           "Generator": {},
           "Entry": {
            "_accepts": {}
           },
           "Feed": {
            "_accepts": {}
           },
           "Service": {},
           "Workspace": {},
           "Collection": {},
           "_Constants": {},
           "_actions": {},
           "util": {}
          }
         },
         "widget": {
          "FeedEntryEditor": {},
          "PeopleEditor": {},
          "FeedEntryViewer": {},
          "EntryHeader": {},
          "FeedViewer": {
           "CategoryIncludeFilter": {}
          },
          "FeedViewerEntry": {},
          "FeedViewerGrouping": {},
          "AtomEntryCategoryFilter": {}
         }
        },
        "av": {
         "FLAudio": {},
         "FLVideo": {},
         "_Media": {},
         "widget": {
          "PlayButton": {},
          "Player": {},
          "ProgressSlider": {},
          "Status": {},
          "VolumeButton": {}
         }
        },
        "charting": {
         "Chart2D": {},
         "Chart3D": {},
         "DataChart": {},
         "Element": {},
         "Series": {},
         "Theme": {
          "Markers": {},
          "_def": {
           "chart": {},
           "plotarea": {},
           "axis": {
            "stroke": {},
            "majorTick": {},
            "minorTick": {}
           },
           "series": {
            "outline": {},
            "stroke": {}
           },
           "marker": {
            "stroke": {}
           }
          }
         },
         "action2d": {
          "Base": {
           "overOutEvents": {}
          },
          "Highlight": {
           "defaultParams": {},
           "optionalParams": {}
          },
          "Magnify": {
           "defaultParams": {}
          },
          "MoveSlice": {
           "defaultParams": {}
          },
          "Shake": {
           "defaultParams": {}
          },
          "Tooltip": {
           "defaultParams": {}
          }
         },
         "axis2d": {
          "Base": {},
          "Default": {
           "defaultParams": {},
           "optionalParams": {}
          },
          "common": {
           "createText": {}
          }
         },
         "scaler": {
          "common": {},
          "linear": {},
          "primitive": {}
         },
         "plot2d": {
          "Areas": {},
          "Bars": {
           "defaultParams": {},
           "optionalParams": {}
          },
          "Base": {},
          "Bubble": {
           "defaultParams": {}
          },
          "Candlesticks": {
           "defaultParams": {},
           "optionalParams": {}
          },
          "ClusteredBars": {},
          "ClusteredColumns": {},
          "Columns": {
           "defaultParams": {},
           "optionalParams": {}
          },
          "Default": {
           "defaultParams": {}
          },
          "Grid": {
           "defaultParams": {}
          },
          "Lines": {},
          "Markers": {},
          "MarkersOnly": {},
          "OHLC": {
           "defaultParams": {},
           "optionalParams": {}
          },
          "Pie": {
           "defaultParams": {},
           "optionalParams": {}
          },
          "Scatter": {},
          "Stacked": {},
          "StackedAreas": {},
          "StackedBars": {},
          "StackedColumns": {},
          "StackedLines": {},
          "common": {
           "defaultStats": {}
          }
         },
         "plot3d": {
          "Bars": {},
          "Base": {},
          "Cylinders": {}
         },
         "themes": {
          "ET": {},
          "PlotKit": {}
         },
         "widget": {
          "Chart2D": {},
          "Legend": {},
          "Sparkline": {
           "margins": {}
          }
         }
        },
        "lang": {
         "aspect": {},
         "docs": {},
         "functional": {},
         "oo": {
          "aop": {},
          "general": {}
         },
         "utils": {}
        },
        "gfx3d": {
         "defaultEdges": {},
         "defaultTriangles": {},
         "defaultQuads": {},
         "defaultOrbit": {
          "center": {}
         },
         "defaultPath3d": {},
         "defaultPolygon": {},
         "defaultCube": {
          "bottom": {},
          "top": {}
         },
         "defaultCylinder": {
          "center": {}
         },
         "lighting": {
          "Model": {},
          "finish": {
           "defaults": {},
           "dull": {},
           "shiny": {},
           "glossy": {},
           "phong_dull": {},
           "phong_shiny": {},
           "phong_glossy": {},
           "luminous": {},
           "metalA": {},
           "metalB": {},
           "metalC": {},
           "metalD": {},
           "metalE": {}
          }
         },
         "matrix": {},
         "Viewport": {},
         "Scene": {},
         "Object": {},
         "Edges": {},
         "Orbit": {},
         "Path3d": {
          "_validSegments": {}
         },
         "Triangles": {},
         "Quads": {},
         "Polygon": {},
         "Cube": {},
         "Cylinder": {},
         "_creators": {},
         "scheduler": {
          "BinarySearchTree": {}
         },
         "drawer": {},
         "vector": {}
        },
        "gfx": {
         "matrix": {},
         "Moveable": {},
         "Mover": {},
         "vectorFontFitting": {},
         "defaultVectorText": {},
         "defaultVectorFont": {},
         "VectorFont": {},
         "defaultPath": {},
         "defaultPolyline": {},
         "defaultRect": {},
         "defaultEllipse": {},
         "defaultCircle": {},
         "defaultLine": {},
         "defaultImage": {},
         "defaultText": {},
         "defaultTextPath": {},
         "defaultStroke": {},
         "defaultLinearGradient": {},
         "defaultRadialGradient": {},
         "defaultPattern": {},
         "defaultFont": {},
         "_base": {},
         "arc": {},
         "shape": {
          "Creator": {},
          "Surface": {},
          "Rect": {},
          "Ellipse": {},
          "Circle": {},
          "Line": {},
          "Polyline": {},
          "Image": {},
          "Text": {},
          "_eventsProcessing": {},
          "Container": {}
         },
         "Shape": {
          "_capMap": {},
          "_capMapReversed": {}
         },
         "Group": {},
         "Surface": {},
         "Rect": {},
         "Ellipse": {},
         "Circle": {},
         "Line": {},
         "Polyline": {},
         "Image": {},
         "Text": {
          "_alignment": {}
         },
         "Path": {
          "_pathVmlToSvgMap": {},
          "renderers": {}
         },
         "TextPath": {},
         "fx": {},
         "path": {
          "Path": {
           "_validSegments": {}
          },
          "TextPath": {}
         },
         "Point": {},
         "Rectangle": {},
         "silverlight": {
          "dasharray": {},
          "fontweight": {},
          "caps": {},
          "joins": {},
          "fonts": {},
          "Font": {},
          "Container": {}
         },
         "svg": {
          "xmlns": {},
          "dasharray": {},
          "Font": {},
          "Container": {}
         },
         "utils": {},
         "vml": {
          "text_alignment": {},
          "_bool": {},
          "Container": {}
         }
        },
        "collections": {
         "BinaryTree": {
          "TraversalMethods": {}
         }
        },
        "color": {
         "Color": {},
         "Palette": {
          "generators": {}
         }
        },
        "math": {
         "curves": {},
         "matrix": {}
        },
        "cometd": {
         "RestChannels": {}
        },
        "rpc": {
         "Rest": {},
         "JsonRest": {},
         "Client": {},
         "OfflineRest": {},
         "Service": {}
        },
        "data": {
         "AndOrReadStore": {},
         "AndOrWriteStore": {},
         "AppStore": {},
         "AtomReadStore": {},
         "CdfStore": {},
         "ClientFilter": {},
         "CouchDBRestStore": {},
         "CssClassStore": {},
         "CssRuleStore": {},
         "CsvStore": {},
         "FileStore": {},
         "FlickrRestStore": {
          "_sortAttributes": {}
         },
         "FlickrStore": {},
         "GoogleFeedStore": {},
         "GoogleSearchStore": {},
         "GoogleWebSearchStore": {},
         "GoogleBlogSearchStore": {},
         "GoogleLocalSearchStore": {},
         "GoogleVideoSearchStore": {},
         "GoogleNewsSearchStore": {},
         "GoogleBookSearchStore": {},
         "GoogleImageSearchStore": {},
         "HtmlStore": {},
         "HtmlTableStore": {},
         "ItemExplorer": {},
         "JsonQueryRestStore": {},
         "JsonRestStore": {},
         "KeyValueStore": {},
         "OpenSearchStore": {},
         "OpmlStore": {},
         "PersevereStore": {},
         "PicasaStore": {},
         "QueryReadStore": {
          "_features": {
           "dojo": {
            "data": {
             "api": {}
            }
           }
          }
         },
         "RailsStore": {},
         "S3Store": {},
         "ServiceStore": {},
         "SnapLogicStore": {
          "Parts": {}
         },
         "StoreExplorer": {},
         "WikipediaStore": {},
         "XmlStore": {},
         "XmlItem": {},
         "css": {
          "rules": {}
         },
         "dom": {},
         "jsonPathStore": {},
         "util": {
          "JsonQuery": {}
         }
        },
        "json": {
         "ref": {},
         "schema": {}
        },
        "date": {
         "IslamicDate": {},
         "hebrew": {
          "Date": {},
          "locale": {},
          "numerals": {}
         },
         "php": {
          "DateFormat": {}
         },
         "posix": {}
        },
        "dtl": {
         "Context": {},
         "DomInline": {},
         "HtmlInline": {},
         "Inline": {},
         "_DomTemplated": {
          "prototype": {}
         },
         "contrib": {
          "dijit": {},
          "data": {
           "_BoundItem": {
            "get": {}
           }
          },
          "dom": {},
          "objects": {}
         },
         "_HtmlTemplated": {},
         "_Templated": {},
         "Token": {},
         "text": {},
         "register": {
          "_registry": {}
         },
         "_base": {},
         "BOOLS": {},
         "dom": {},
         "ext-dojo": {},
         "filter": {
          "dates": {},
          "htmlstrings": {},
          "integers": {},
          "lists": {},
          "logic": {},
          "misc": {
           "_phone2numeric": {}
          },
          "strings": {
           "_truncate_singlets": {}
          }
         },
         "utils": {
          "date": {
           "DateFormat": {}
          }
         },
         "render": {
          "dom": {
           "Render": {}
          },
          "html": {}
         },
         "tag": {
          "date": {
           "NowNode": {}
          },
          "loader": {},
          "logic": {},
          "loop": {},
          "misc": {
           "TemplateTagNode": {}
          }
         }
        },
        "editor": {
         "plugins": {
          "GlobalTableHandler": {},
          "TablePlugins": {},
          "EditorTableDialog": {},
          "EditorModifyTableDialog": {},
          "UploadImage": {}
         }
        },
        "embed": {
         "Flash": {},
         "Object": {},
         "Quicktime": {
          "version": {}
         }
        },
        "encoding": {
         "ascii85": {},
         "base64": {},
         "bits": {
          "OutputStream": {},
          "InputStream": {}
         },
         "compression": {
          "lzw": {
           "Encoder": {},
           "Decoder": {}
          },
          "Splay": {}
         },
         "crypto": {
          "cipherModes": {},
          "outputTypes": {}
         },
         "digests": {
          "MD5": {},
          "SHA1": {},
          "outputTypes": {}
         },
         "easy64": {}
        },
        "flash": {
         "Info": {},
         "Embed": {},
         "Communicator": {},
         "Install": {},
         "info": {}
        },
        "form": {
         "_BusyButtonMixin": {},
         "BusyButton": {},
         "BusyComboButton": {},
         "BusyDropDownButton": {},
         "_CheckedMultiSelectItem": {},
         "CheckedMultiSelect": {},
         "DateTextBox": {},
         "DayTextBox": {},
         "MonthTextBox": {},
         "YearTextBox": {},
         "_DropDownSelectMenu": {},
         "DropDownSelect": {},
         "DropDownStack": {},
         "FileInput": {},
         "FileInputAuto": {},
         "FileInputBlind": {},
         "FilePickerTextBox": {},
         "FileUploader": {},
         "Manager": {},
         "MultiComboBox": {},
         "_ChildTextBox": {},
         "_OldPWBox": {},
         "_NewPWBox": {},
         "_VerifyPWBox": {},
         "PasswordValidator": {},
         "RadioStack": {},
         "_RangeSliderMixin": {},
         "HorizontalRangeSlider": {},
         "VerticalRangeSlider": {},
         "Rating": {},
         "TimeSpinner": {},
         "_FormSelectWidget": {},
         "_HasDropDown": {},
         "_SelectStackMixin": {},
         "manager": {
          "_ClassMixin": {},
          "_DisplayMixin": {},
          "_EnableMixin": {},
          "_FormMixin": {},
          "_Mixin": {},
          "_NodeMixin": {},
          "_ValueMixin": {}
         }
        },
        "fx": {
         "Shadow": {},
         "_arg": {},
         "ext-dojo": {},
         "text": {}
        },
        "grid": {
         "__DataCellDef": {},
         "__DataViewDef": {},
         "DataGrid": {},
         "DataSelection": {},
         "Selection": {},
         "util": {},
         "_EditManager": {},
         "_Events": {},
         "_FocusManager": {},
         "_Grid": {},
         "_Layout": {},
         "_RowManager": {},
         "_RowSelector": {},
         "_Scroller": {},
         "_View": {},
         "_GridAvatar": {},
         "_ViewManager": {},
         "cells": {
          "_Base": {},
          "Cell": {},
          "RowIndex": {},
          "Select": {},
          "AlwaysEdit": {},
          "Bool": {},
          "_Widget": {},
          "ComboBox": {},
          "DateTextBox": {},
          "CheckBox": {},
          "Editor": {}
         },
         "compat": {
          "_data": {},
          "_grid": {}
         },
         "editors": {
          "Dijit": {},
          "ComboBox": {},
          "DateTextBox": {},
          "CheckBox": {},
          "Editor": {},
          "Base": {},
          "Input": {},
          "Select": {},
          "AlwaysOn": {},
          "Bool": {}
         },
         "data": {
          "Mixer": {},
          "Field": {},
          "Fields": {},
          "Model": {},
          "Rows": {},
          "Table": {},
          "Objects": {},
          "Dynamic": {},
          "DojoData": {
           "query": {}
          }
         },
         "Builder": {},
         "contentBuilder": {},
         "headerBuilder": {},
         "tableMap": {},
         "cell": {},
         "edit": {},
         "focus": {},
         "layout": {},
         "jobs": {},
         "publicEvents": {},
         "rows": {},
         "scroller": {
          "base": {},
          "columns": {}
         },
         "selection": {},
         "views": {}
        },
        "Grid": {},
        "VirtualGrid": {},
        "GridRowView": {},
        "GridView": {},
        "help": {},
        "highlight": {
         "constants": {
          "APOS_STRING_MODE": {},
          "QUOTE_STRING_MODE": {},
          "BACKSLASH_ESCAPE": {},
          "C_LINE_COMMENT_MODE": {},
          "C_BLOCK_COMMENT_MODE": {},
          "HASH_COMMENT_MODE": {},
          "C_NUMBER_MODE": {}
         },
         "languages": {
          "cpp": {
           "defaultMode": {
            "keywords": {}
           }
          },
          "css": {
           "defaultMode": {
            "keywords": {
             "keyword": {}
            }
           }
          },
          "delphi": {
           "defaultMode": {}
          },
          "django": {
           "defaultMode": {}
          },
          "html": {
           "defaultMode": {}
          },
          "javascript": {
           "defaultMode": {
            "keywords": {
             "keyword": {},
             "literal": {},
             "keyword constant": {},
             "name builtin": {},
             "name builtin pseudo": {}
            }
           }
          },
          "pygments": {
           "_html": {
            "tags": {}
           },
           "xml": {}
          },
          "xml": {
           "defaultMode": {}
          },
          "python": {
           "defaultMode": {
            "keywords": {}
           }
          },
          "sql": {
           "defaultMode": {
            "keywords": {
             "aggregate": {}
            }
           }
          }
         }
        },
        "html": {
         "_ContentSetter": {},
         "metrics": {
          "_fontResizeNode": {
           "contentWindow": {}
          }
         }
        },
        "image": {
         "Badge": {},
         "FlickrBadge": {},
         "Gallery": {},
         "Lightbox": {},
         "LightboxDialog": {
          "_groups": {}
         },
         "LightboxNano": {},
         "Magnifier": {},
         "MagnifierLite": {},
         "SlideShow": {},
         "ThumbnailPicker": {}
        },
        "io": {
         "OAuth": {},
         "proxy": {
          "xip": {
           "XhrIframeFacade": {}
          }
         },
         "scriptFrame": {},
         "windowName": {},
         "xhrPlugins": {}
        },
        "jsonPath": {},
        "layout": {
         "ContentPane": {
          "DeferredHandle": {}
         },
         "DragPane": {},
         "ExpandoPane": {},
         "FloatingPane": {},
         "Dock": {},
         "_DockNode": {},
         "GridContainer": {},
         "RadioGroup": {},
         "RadioGroupFade": {},
         "RadioGroupSlide": {},
         "_RadioButton": {},
         "ResizeHandle": {},
         "_ResizeHelper": {},
         "RotatorContainer": {},
         "RotatorPager": {},
         "ScrollPane": {},
         "ToggleSplitter": {},
         "dnd": {
          "Avatar": {},
          "PlottedDnd": {},
          "DropIndicator": {}
         },
         "ext-dijit": {
          "layout": {}
         }
        },
        "off": {
         "sync": {
          "ActionLog": {}
         },
         "files": {},
         "ui": {}
        },
        "robot": {},
        "secure": {
         "capability": {}
        },
        "sketch": {
         "AnnotationTool": {},
         "Annotation": {
          "calculate": {},
          "Modes": {}
         },
         "DoubleArrowAnnotation": {},
         "Figure": {},
         "LeadAnnotation": {},
         "PreexistingAnnotation": {},
         "SingleArrowAnnotation": {},
         "Slider": {},
         "ButtonGroup": {},
         "Toolbar": {},
         "UnderlineAnnotation": {},
         "UndoStack": {},
         "CommandTypes": {},
         "_Plugin": {}
        },
        "sql": {
         "_SQLCrypto": {},
         "_crypto": {}
        },
        "storage": {
         "AirDBStorageProvider": {},
         "AirEncryptedLocalStorageProvider": {},
         "AirFileStorageProvider": {},
         "FlashStorageProvider": {},
         "GearsStorageProvider": {},
         "Provider": {},
         "WhatWGStorageProvider": {}
        },
        "string": {
         "BidiComplex": {},
         "sprintf": {
          "Formatter": {
           "_specifiers": {
            "b": {},
            "o": {},
            "x": {},
            "X": {},
            "d": {},
            "i": {},
            "u": {},
            "c": {},
            "s": {},
            "e": {},
            "E": {},
            "f": {},
            "F": {},
            "g": {},
            "G": {}
           }
          }
         }
        },
        "testing": {
         "DocTest": {}
        },
        "timing": {
         "Sequence": {},
         "threadStates": {},
         "threadPriorities": {},
         "Timer": {},
         "doLater": {
          "caller": {}
         }
        },
        "uuid": {
         "Uuid": {},
         "version": {},
         "variant": {},
         "generateTimeBasedUuid": {}
        },
        "validate": {
         "ca": {},
         "_cardInfo": {},
         "regexp": {
          "ca": {},
          "us": {}
         },
         "us": {}
        },
        "widget": {
         "gauge": {
          "AnalogLineIndicator": {},
          "BarLineIndicator": {},
          "AnalogArcIndicator": {},
          "AnalogArrowIndicator": {},
          "AnalogNeedleIndicator": {},
          "BarIndicator": {},
          "_Gauge": {
           "_backgroundDefault": {}
          },
          "Range": {},
          "_Indicator": {
           "font": {}
          }
         },
         "AnalogGauge": {},
         "BarGauge": {},
         "_CalendarBase": {},
         "_CalendarView": {},
         "_CalendarDay": {},
         "_CalendarDayView": {},
         "_CalendarMonthYear": {},
         "_CalendarMonthYearView": {},
         "Calendar2Pane": {},
         "Calendar": {},
         "DailyCalendar": {},
         "MonthAndYearlyCalendar": {},
         "_FisheyeFX": {},
         "CalendarFisheye": {},
         "_CalendarMonth": {},
         "_CalendarMonthView": {},
         "_CalendarYear": {},
         "_CalendarYearView": {},
         "Calendar3Pane": {},
         "MonthlyCalendar": {},
         "YearlyCalendar": {},
         "ColorPicker": {},
         "Dialog": {},
         "DocTester": {},
         "_FileInfoPane": {},
         "FilePicker": {},
         "FisheyeList": {
          "EDGE": {}
         },
         "FisheyeListItem": {},
         "FisheyeLite": {},
         "Iterator": {
          "query": {}
         },
         "Loader": {},
         "Pager": {},
         "_PagerItem": {},
         "PlaceholderMenuItem": {},
         "Roller": {},
         "RollerSlide": {},
         "_RollerHover": {},
         "_RollingListPane": {},
         "_RollingListGroupPane": {},
         "RollingList": {},
         "SortList": {},
         "Standby": {},
         "Toaster": {
          "messageTypes": {}
         },
         "Wizard": {},
         "WizardPane": {}
        },
        "wire": {
         "CompositeWire": {},
         "DataWire": {},
         "TableAdapter": {},
         "TextAdapter": {},
         "TreeAdapter": {},
         "Wire": {},
         "XmlWire": {},
         "_wireClasses": {},
         "ml": {
          "Action": {},
          "ActionFilter": {},
          "Data": {},
          "DataProperty": {},
          "DataStore": {},
          "Invocation": {},
          "Service": {
           "_handlerClasses": {}
          },
          "RestHandler": {},
          "XmlHandler": {},
          "JsonHandler": {
           "headers": {}
          },
          "Transfer": {},
          "ChildWire": {},
          "ColumnWire": {},
          "NodeWire": {},
          "SegmentWire": {},
          "XmlElement": {}
         }
        },
        "xml": {
         "Script": {},
         "parser": {}
        },
        "xmpp": {
         "ChatService": {},
         "chat": {},
         "PresenceService": {},
         "presence": {},
         "RosterService": {},
         "roster": {},
         "TransportSession": {},
         "UserService": {},
         "sasl": {},
         "util": {
          "Base64": {}
         },
         "widget": {
          "ChatSession": {}
         },
         "xmppSession": {},
         "xmpp": {
          "error": {}
         }
        }
       },
       "navigator": {
        "plugins": {}
       },
       "l": {
        "style": {}
       },
       "r": {
        "style": {}
       },
       "b": {
        "style": {}
       },
       "bl": {
        "style": {}
       },
       "br": {
        "style": {}
       },
       "tr": {
        "style": {}
       },
       "node": {
        "style": {}
       },
       "dfd": {
        "ioArgs": {
         "frame": {
          "contentWindow": {}
         }
        }
       },
       "frame": {
        "style": {},
        "contentWindow": {}
       }
      },
      "dijit": {},
      "dojo": {},
      "thix": {},
      "Math": {},
      "Array": {},
      "djConfig": {},
      "navigator": {},
      "document": {},
      "console": {},
      "e": {},
      "window": {},
      "style": {},
      "runtimeStyle": {},
      "Object": {},
      "RegExp": {},
      "acme": {},
      "history": {},
      "n": {},
      "dojox": {},
      "dependencies": {},
      "value": {},
      "token": {},
      "pixelValues": {},
      "node": {},
      "Number": {},
      "wrap": {}
     }

});
