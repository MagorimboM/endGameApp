import React from 'react';
import { ResponsiveLine } from '@nivo/line'





function ProgressAndForecastChart(props: any) {

    const data = [{"id": "japan","color": "hsl(168, 70%, 50%)","data": [
                {
                    "x": "plane",
                    "y": 108
                },
                {
                    "x": "helicopter",
                    "y": 253
                },
                {
                    "x": "boat",
                    "y": 204
                },
                {
                    "x": "train",
                    "y": 206
                },
                {
                    "x": "subway",
                    "y": 158
                },
                {
                    "x": "bus",
                    "y": 53
                },
                {
                    "x": "car",
                    "y": 287
                },
                {
                    "x": "moto",
                    "y": 78
                },
                {
                    "x": "bicycle",
                    "y": 81
                },
                {
                    "x": "horse",
                    "y": 175
                },
                {
                    "x": "skateboard",
                    "y": 40
                },
                {
                    "x": "others",
                    "y": 131
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(358, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 258
                },
                {
                    "x": "helicopter",
                    "y": 15
                },
                {
                    "x": "boat",
                    "y": 80
                },
                {
                    "x": "train",
                    "y": 126
                },
                {
                    "x": "subway",
                    "y": 22
                },
                {
                    "x": "bus",
                    "y": 38
                },
                {
                    "x": "car",
                    "y": 201
                },
                {
                    "x": "moto",
                    "y": 42
                },
                {
                    "x": "bicycle",
                    "y": 116
                },
                {
                    "x": "horse",
                    "y": 31
                },
                {
                    "x": "skateboard",
                    "y": 91
                },
                {
                    "x": "others",
                    "y": 79
                }
            ]
        }
    ]


    return (<>


        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,

            }}
            yFormat=" >-.2f"
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',

            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',



            }}
            theme={{
                "text": {
                    "fontSize": 11,
                    "fill": "#ffffff",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }}
            enableGridX={false}
            enableGridY={false}
            lineWidth={1}
            pointSize={5}
            pointColor={{ from: 'color', modifiers: [] }}
            pointBorderWidth={1}
            pointBorderColor={{ from: 'color', modifiers: [] }}
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.1}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    </>);
};

export { ProgressAndForecastChart }; 