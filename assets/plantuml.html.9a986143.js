const e=JSON.parse('{"key":"v-361dfaa8","path":"/zh/guide/markdown/advanced/plantuml.html","title":"PlantUML","lang":"zh-CN","frontmatter":{"title":"PlantUML","icon":"area-chart","head":[["meta",{"name":"og:url","content":"/zh/guide/markdown/advanced/plantuml.html"}],["meta",{"name":"og:site_name","content":"vuepress-theme-star"}],["meta",{"name":"og:title","content":"PlantUML"}],["meta",{"name":"og:description","content":""}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:image","content":""}],["meta",{"name":"og:updated_time","content":"2022-10-22T08:40:46.000Z"}],["meta",{"name":"og:locale","content":"zh-CN"}],["meta",{"name":"og:locale:alternate","content":"en-US"}],["meta",{"name":"og:locale:alternate","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"vuepress-theme-star"}],["meta",{"name":"article:author","content":""}],["meta",{"name":"article:published_time","content":""}],["meta",{"name":"article:modified_time","content":"2022-10-22T08:40:46.000Z"}]]},"excerpt":"<h1 id=\\"plantuml\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#plantuml\\" aria-hidden=\\"true\\">#</a> PlantUML</h1>\\n<p>让你 VuePress 站点中的 Markdown 文件支持 PlantUML 图表。</p>\\n<p>使用 <a href=\\"https://www.plantuml.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">plantuml<ExternalLinkIcon/></a> 提供相应功能。</p>\\n","headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1665237112000,"updatedTime":1666428046000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com","commits":3}]},"copyright":"Copyright © 2021-present Starzkg","filePathRelative":"zh/guide/markdown/advanced/plantuml.md","content":"---\\ntitle: PlantUML\\nicon: area-chart\\n---\\n# PlantUML\\n\\n让你 VuePress 站点中的 Markdown 文件支持 PlantUML 图表。\\n\\n使用 [plantuml](https://www.plantuml.com/) 提供相应功能。\\n\\n<!-- more -->\\n\\n## 语法\\n\\n````md\\n<!-- ↓ :preset 是可选的 -->\\n\\n```puml:preset\\n\\n<!-- 放置你的流程图代码 -->\\n\\n```\\n````\\n目前可用的预设:\\n\\n- `png` (默认)\\n- `svg`\\n- `txt`\\n\\n## 示例\\n````md\\n```plantuml\\n@startuml\\nBob -> Alice : hello\\n@enduml\\n```\\n```plantuml:svg\\n@startuml\\nBob -> Alice : hello\\n@enduml\\n```\\n```plantuml:txt\\n@startuml\\nBob -> Alice : hello\\n@enduml\\n```\\n````\\n\\n```plantuml\\n@startuml\\nBob -> Alice : hello\\n@enduml\\n```\\n```plantuml:svg\\n@startuml\\nBob -> Alice : hello\\n@enduml\\n```\\n```plantuml:txt\\n@startuml\\nBob -> Alice : hello\\n@enduml\\n```\\n\\n```puml\\n@startuml\\n!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml\\n\\n\\n\'Icons\\n!define FA_5_URL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/e53fd61259c0f2449edfe304cad83f51d0fbb5c1/font-awesome-5\\n!include FA_5_URL/cloud.puml\\n!include FA_5_URL/youtube.puml\\n!include FA_5_URL/server.puml\\n\\n!define MATERIAL_URL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/e53fd61259c0f2449edfe304cad83f51d0fbb5c1/material\\n!include MATERIAL_URL/zoom_in.puml\\n\\n!define osaPuml https://raw.githubusercontent.com/Crashedmind/PlantUML-opensecurityarchitecture2-icons/master\\n!include osaPuml/Common.puml\\n!include osaPuml/User/all.puml\\n\\n!include <office/Servers/database_server>\\n!include <office/Servers/file_server>\\n!include <office/Servers/application_server>\\n!include <office/Concepts/service_application>\\n!include <office/Concepts/firewall>\\n\\n!define AWS_PUML https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist\\n!include AWS_PUML/AWSCommon.puml\\n!include AWS_PUML/Robotics/RoboMaker.puml\\n\\n\'Common Styling\\nskinparam wrapWidth 250\\n\\nUpdateElementStyle(\\"System\\", $bgColor=\\"#ffffff\\", $fontColor=\\"#000000\\", $shadowing=\\"true\\")\\nUpdateElementStyle(\\"Person\\", $bgColor=\\"#e0f1fb\\", $fontColor=\\"#000000\\", $shape=RoundedBoxShape())\\n\\nAddElementTag(\\"clickableText\\", $fontColor=\\"purple\\")\\nAddElementTag(\\"button\\", $bgColor=\\"#444444\\", $fontColor=\\"#ffffff\\")\\nAddElementTag(\\"primary\\", $bgColor=\\"#ffdb58\\", $fontColor=\\"#000000\\", $shadowing=\\"false\\", $borderColor=\\"Gray\\")\\nAddElementTag(\\"highlightBoundary\\", $bgColor=\\"#fce8ee\\")\\n\\n\\n\\n\\n\' Tables\\n!global $TYPE_X_SAMPLE_POOL_TABLE = \\"type_x_sample_pool\\"\\n!global $TYPE_Y_SAMPLE_POOL_TABLE = \\"type_y_sample_pool\\"\\n!unquoted procedure $SAMPLE_POOL_TABLE_DESC()\\nA subquery from which to query samples, should be joined to any\\ncolumns that you want to include in the $DAILY_COLLECTED_SAMPLES_TABLE table\\n!endprocedure\\n\\n!global $SAMPLE_LABELS_TABLE = \\"some_other_label_db\\"\\n!global $SAMPLE_LABELS_ID = \\"sampleLabelsDb\\"\\n!global $SAMPLE_LABELS_CONTAINER_DESC = $LABELED_DATASOURCE_DESC\\n!global $SAMPLE_LABELS_COMPONENT_DESC = \\"Stores all samples which have been labeled.\\\\n\\"\\n!global $SAMPLE_LABELS_TYPE = \\"BigTable\\"\\n!global $SAMPLE_LABELS_SCHEMA = \\"https://docs.google.com/spreadsheets\\"\\n\\n!global $DAILY_COLLECTED_SAMPLES_TABLE = \\"type_y_samples_{date}\\"\\n!global $DAILY_COLLECTED_SAMPLES_ID = \\"dailySamplesDb\\"\\n!global $DAILY_COLLECTED_SAMPLES_DESC = \\"A days worth of samples collected during single run of the pipeline.\\\\n\\"\\n!global $DAILY_COLLECTED_SAMPLES_TYPE = \\"BigQueryDailyTable\\"\\n\\n!global $LABELED_DATASOURCE_ID = \\"labeledDatasource\\"\\n!global $LABELED_DATASOURCE_NAME = \\"labeled_datasource_bucket\\"\\n!global $LABELED_DATASOURCE_TYPE = \\"GCS\\"\\n!global $LABELED_DATASOURCE_DESC = \\"Where the labelers write their labeling results\\"\\n\\n\'Columns\\n!global $SEND_FOR_LABELING_COLUMN = \\"send_for_labeling\\"\\n!global $CONTENT_ID_COLUMN = \\"some_id\\"\\n\\n!global $SYSTEM_NAME = \\"My Project Name\\"\\n\\n\\n\\nleft header\\n\\n\\\\t<font size=22 color=black>$SYSTEM_NAME - System View</font>\\n\\n\\\\t<font size=14 color=#484848>The goals of my project are described here</font>\\n\\n\\n\\n\\nend header\\n\\n\\nSystem(sysName, \\"Labeling System\\\\n\\", \\"\\", $sprite=\\"cloud\\", $tags=\\"primary\\", $link=\\"https://tinyurl.com/yblre3m4\\")\\n\\nBoundary(labelers, \' \\\\n<font color=black size=16>Labelers</font>\', \'Human Resources\') {\\n    Person(labelerB, \\"Labelers B\\", \\"Labeler Type 2\\\\n\\", $tags=\\"a\\")\\n    Person(labelerA, \\"Labelers A\\", \\"Labeler Type 2\\\\n\\", $tags=\\"a\\")\\n}\\nRel_U(sysName, labelerB,\\"  Trigger samples for labeling\\")\\nRel_D(labelerB, sysName,\\" Store labeling results        \\")\\n\\nSystem(videoSamples, \\"Videos\\", \\"Users and internal customers\\", $sprite=\\"youtube\\")\\nRel_D(videoSamples, labelerA, \\" Send samples to labelers\\")\\n\\nSystem(modelTrainingInference, \\"Model Training + Inference\\\\n\\\\n<font color=#e0575e><$RoboMaker></font>\\\\n\\", \\"\\", $tags=\\"secondary\\")\\nRel_D(labelerA, modelTrainingInference,\\" Send labels\\")\\nRel_R(modelTrainingInference, sysName, \\"Send model scores\\")\\nRel_L(sysName, modelTrainingInference, \\"Send labels\\")\\n\\nHIDE_STEREOTYPE()\\n@enduml\\n```\\n\\n```puml\\n@startuml\\n!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml\\n\\n\\n\'Icons\\n!define FA_5_URL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/e53fd61259c0f2449edfe304cad83f51d0fbb5c1/font-awesome-5\\n!include FA_5_URL/cloud.puml\\n!include FA_5_URL/youtube.puml\\n!include FA_5_URL/server.puml\\n\\n!define MATERIAL_URL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/e53fd61259c0f2449edfe304cad83f51d0fbb5c1/material\\n!include MATERIAL_URL/zoom_in.puml\\n\\n!define osaPuml https://raw.githubusercontent.com/Crashedmind/PlantUML-opensecurityarchitecture2-icons/master\\n!include osaPuml/Common.puml\\n!include osaPuml/User/all.puml\\n\\n!include <office/Servers/database_server>\\n!include <office/Servers/file_server>\\n!include <office/Servers/application_server>\\n!include <office/Concepts/service_application>\\n!include <office/Concepts/firewall>\\n\\n!define AWS_PUML https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist\\n!include AWS_PUML/AWSCommon.puml\\n!include AWS_PUML/Robotics/RoboMaker.puml\\n\\n\'Common Styling\\nskinparam wrapWidth 250\\n\\nUpdateElementStyle(\\"System\\", $bgColor=\\"#ffffff\\", $fontColor=\\"#000000\\", $shadowing=\\"true\\")\\nUpdateElementStyle(\\"Person\\", $bgColor=\\"#e0f1fb\\", $fontColor=\\"#000000\\", $shape=RoundedBoxShape())\\n\\nAddElementTag(\\"clickableText\\", $fontColor=\\"purple\\")\\nAddElementTag(\\"button\\", $bgColor=\\"#444444\\", $fontColor=\\"#ffffff\\")\\nAddElementTag(\\"primary\\", $bgColor=\\"#ffdb58\\", $fontColor=\\"#000000\\", $shadowing=\\"false\\", $borderColor=\\"Gray\\")\\nAddElementTag(\\"highlightBoundary\\", $bgColor=\\"#fce8ee\\")\\n\\n\\n\\n\\n\' Tables\\n!global $TYPE_X_SAMPLE_POOL_TABLE = \\"type_x_sample_pool\\"\\n!global $TYPE_Y_SAMPLE_POOL_TABLE = \\"type_y_sample_pool\\"\\n!unquoted procedure $SAMPLE_POOL_TABLE_DESC()\\nA subquery from which to query samples, should be joined to any\\ncolumns that you want to include in the $DAILY_COLLECTED_SAMPLES_TABLE table\\n!endprocedure\\n\\n!global $SAMPLE_LABELS_TABLE = \\"some_other_label_db\\"\\n!global $SAMPLE_LABELS_ID = \\"sampleLabelsDb\\"\\n!global $SAMPLE_LABELS_CONTAINER_DESC = $LABELED_DATASOURCE_DESC\\n!global $SAMPLE_LABELS_COMPONENT_DESC = \\"Stores all samples which have been labeled.\\\\n\\"\\n!global $SAMPLE_LABELS_TYPE = \\"BigTable\\"\\n!global $SAMPLE_LABELS_SCHEMA = \\"https://docs.google.com/spreadsheets\\"\\n\\n!global $DAILY_COLLECTED_SAMPLES_TABLE = \\"type_y_samples_{date}\\"\\n!global $DAILY_COLLECTED_SAMPLES_ID = \\"dailySamplesDb\\"\\n!global $DAILY_COLLECTED_SAMPLES_DESC = \\"A days worth of samples collected during single run of the pipeline.\\\\n\\"\\n!global $DAILY_COLLECTED_SAMPLES_TYPE = \\"BigQueryDailyTable\\"\\n\\n!global $LABELED_DATASOURCE_ID = \\"labeledDatasource\\"\\n!global $LABELED_DATASOURCE_NAME = \\"labeled_datasource_bucket\\"\\n!global $LABELED_DATASOURCE_TYPE = \\"GCS\\"\\n!global $LABELED_DATASOURCE_DESC = \\"Where the labelers write their labeling results\\"\\n\\n\'Columns\\n!global $SEND_FOR_LABELING_COLUMN = \\"send_for_labeling\\"\\n!global $CONTENT_ID_COLUMN = \\"some_id\\"\\n\\n!global $SYSTEM_NAME = \\"My Project Name\\"\\n\\n\\n\\n\\nleft header\\n\\n\\\\t<font size=22 color=black>$SYSTEM_NAME - Container View</font>\\n\\n\\\\t<font size=14 color=black><U+25CF>  Goal 1</font>\\n\\\\t<font size=14 color=black><U+25CF>  Goal 2</font>\\n\\\\t<font size=14 color=black><U+25CF>  Goal 3</font>\\n\\\\t<font size=14 color=black><U+25CF>  Goal 4</font>\\n\\n\\n\\n\\n\\nend header\\n\\n\\nPerson(labelerA, \\"Labeler A\\", \\"\\\\t     Labeler-A Description     \\\\t\\\\n\\", $tags=\\"a\\")\\nContainerDb(bigQueryLabelDB, \\"LabelADb\\", \\"BigQuery\\", \\"A database where type A labels are stored\\")\\nContainerDb(modelScoreDb, \\"ModelScoreDB\\", \\"BigQuery\\", \\"A database where model scores are stored\\")\\nPerson(labelerB, \\"Labeler B\\", \\"\\\\t     Labeler-B Description     \\\\t\\\\n\\", $tags=\\"a\\")\\nContainerDb($LABELED_DATASOURCE_ID, \\"$LABELED_DATASOURCE_NAME\\", \\"$LABELED_DATASOURCE_TYPE\\", $LABELED_DATASOURCE_DESC)\\nSystem_Boundary(sysName, \' \\\\n<font color=black size=16>Label System FooBarBaz</font>\') {\\n    Container(samplingPipeline, \\"Pipeline\\", \\"some-etl-framework\\", \\"ETL job for sampling / labeling\\", $tags=\\"primary\\", $link=\\"https://tinyurl.com/y9j7twkz\\")\\n    Container(labelRetrievalJob, \\"LabelRetrievalJob\\", \\"some-etl-framework\\", \\"DAG for retrieving and storing label data from labelers.\\", $tags=\\"primary\\", $link=\\"https://tinyurl.com/y8egw3wt\\")\\n    ContainerDb($SAMPLE_LABELS_ID, $SAMPLE_LABELS_TABLE, $SAMPLE_LABELS_TYPE, $SAMPLE_LABELS_COMPONENT_DESC)\\n    ContainerDb($DAILY_COLLECTED_SAMPLES_ID, $DAILY_COLLECTED_SAMPLES_TABLE, $DAILY_COLLECTED_SAMPLES_TYPE, $DAILY_COLLECTED_SAMPLES_DESC)\\n    ContainerQueue(sampleQueue, \\"SampleQueueFoo\\", \\"SQS\\", \\"Samples which should be double reviewed\\")\\n    Container(labelerBApi, \\"ReviewQueueAPI\\", \\"NodeJS\\", \\"API for pulling samples for review\\", $sprite=\\"server\\")\\n    Container(btBqSnapshotJob, \\"ExportBigQuerySnapshot\\", \\"some-etl-framework\\", \\"A job to take daily BQ snapshots\\\\nof //$SAMPLE_LABELS_TABLE//\\", $tags=\\"primary\\", $link=\\"https://tinyurl.com/yz9bm37c\\")\\n}\\nSystem(modelTrainingInference, \\"Model Training + Inference\\\\n\\\\n<font color=#e0575e><$RoboMaker></font>\\\\n\\", \\"\\")\\n\\nRel_R(samplingPipeline, $DAILY_COLLECTED_SAMPLES_ID, \\" \\")\\nRel_D(samplingPipeline, sampleQueue, \\" \\")\\nBiRel_D($SAMPLE_LABELS_ID, samplingPipeline, \\" \\")\\nRel_L(labelRetrievalJob, $SAMPLE_LABELS_ID, \\" \\")\\nRel_L($LABELED_DATASOURCE_ID, labelRetrievalJob, \\" \\")\\nRel_R(sampleQueue, labelerBApi, \\" \\")\\nRel_R(labelerBApi, labelerB, \\" \\")\\nRel_R(labelerB, $LABELED_DATASOURCE_ID, \\" \\")\\nRel_L(modelScoreDb, samplingPipeline, \\" \\")\\nRel_D(modelTrainingInference, modelScoreDb, \\" \\")\\nRel_D(bigQueryLabelDB, modelTrainingInference, \\" \\")\\nRel_L(labelerA, bigQueryLabelDB, \\" \\")\\nRel_L($SAMPLE_LABELS_ID, modelTrainingInference, \\" \\")\\nRel_D($SAMPLE_LABELS_ID, btBqSnapshotJob, \\" \\")\\n\\nHIDE_STEREOTYPE()\\n@enduml\\n```\\n","icon":"area-chart","author":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com"}],"top":false,"length":1106,"words":1106,"readingTime":3.69}');export{e as data};
