/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, SafeAreaView ,StyleSheet,ScrollView, Dimensions,TouchableOpacity} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import highlights from '../data/banner';
import categories from '../data/categories';
import categories2 from '../data/categories2';
import categories3 from '../data/categories3';
import categories4 from '../data/categories4';
import categories5 from '../data/categories5';
import categories6 from '../data/categories6';


const {width,height} = Dimensions.get('window');

export default function HomeScreen({navigation}) {

    const Highlight = ({item})=>{
        return (
        <View style={[styles.hightlight,{backgroundColor:item.backgroundColor}]}>
            <View style={styles.hightlightitem}>
                <View style={styles.chipscontainer}>
                    <Text style={styles.chipps}>{item.chips}</Text>
                </View>
                <Image source ={item.image} style={styles.hightlightimage}/>
            </View>
            <View>
                <Text style={styles.hightlightTitle}>{item.title}</Text>
                <Text style={styles.hightlightsubTitle}>{item.subtitle}</Text>
            </View>
        </View>
        );
    };


    return (
        <View style={styles.container}>
            <SafeAreaView style ={styles.header}>
                <View style={styles.headerwrapper}>
                    <View style={styles.headerDetails}>
                        <View style={styles.mapiconwrapper}>
                            <Icon name ="map-pin" size ={25} style={styles.mapicon} onPress={()=>navigation.navigate('My_addresss')}/>
                        </View>
                    <View>
                    <Text style={styles.headertitle}> Deliver to </Text>
                    <Text style={styles.headersubtitle}> Alpitiya Godakawela </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('profile_informations')}>
                    <Image source={require('../assest/image/person1.jpg')} style={styles.headerimage} />
                </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View style={styles.search}>
                <View style={styles.searchwrapper}>
                    <Icon name="search" size={20} style={styles.searchicon}/>
                    <TextInput placeholder="Search for anything" style={styles.searchinput}/>
                </View>
            </View>
            <View style={styles.highlightswrapper}>
                <FlatList
                data={highlights}
                renderItem={Highlight}
                keyExtractor={(item)=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}

                />
            </View>
            <View style={styles.categoryWrapper}>
                <View style={styles.category}>
                    <View>
                        <Text style={styles.categoryTitle}> Category </Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('categories')} >
                        <Text style={styles.categorysubtitle}> See all </Text>
                    </TouchableOpacity>
                </View>

{/* Start categary */}
                <View style={{flexDirection:'row'}}>
                <ScrollView
                style={{
                    marginTop:10,
                }}>
                    {categories.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={()=>navigation.navigate('vegitables')}
                                 key={index} style={{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    marginTop:10,

                                }}>
                                    {chunk.map(category=>{
                                            return (
                                                <View key={category.id} style={{
                                                      width:width / 3 - 30,
                                                        marginHorizontal:10,
                                                        justifyContent:'center',
                                                        marginBottom:20,

                                                }}>
                                                <View style={{
                                                    position:'absolute',
                                                    top:0,
                                                    backgroundColor:'#fef9ea',
                                                    borderRadius:10,
                                                    width:width / 3 - 30,
                                                    height:width / 3 - 60,
                                                }}/>
                                                    <View>
                                                        <Image source={category.image} style={{
                                                            width:width / 3 - 30,
                                                            height:width / 3 - 70,
                                                        }}/>
                                                        <Text style={{
                                                            textAlign:'center',
                                                            fontWeight:'500',

                                                        }}>{category.title}</Text>
                                                    </View>
                                                </View>
                                            );

                                        })
                                    }
                          </TouchableOpacity>

                            );
                        })
                    }
                </ScrollView>
                <ScrollView
                style={{
                    marginTop:10,
                }}>
                    {categories2.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={()=>navigation.navigate('fruits')}
                                 key={index} style={{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    marginTop:10,

                                }}>
                                    {chunk.map(category=>{
                                            return (
                                                <View key={category.id} style={{
                                                      width:width / 3 - 30,
                                                        marginHorizontal:10,
                                                        justifyContent:'center',
                                                        marginBottom:20,

                                                }}>
                                                <View style={{
                                                    position:'absolute',
                                                    top:0,
                                                    backgroundColor:'#fef9ea',
                                                    borderRadius:10,
                                                    width:width / 3 - 30,
                                                    height:width / 3 - 60,
                                                }}/>
                                                    <View>
                                                        <Image source={category.image} style={{
                                                            width:width / 3 - 30,
                                                            height:width / 3 - 70,
                                                        }}/>
                                                        <Text style={{
                                                            textAlign:'center',
                                                            fontWeight:'500',

                                                        }}>{category.title}</Text>
                                                    </View>
                                                </View>
                                            );

                                        })
                                    }
                          </TouchableOpacity>
                          
                            );
                        })
                    }
                </ScrollView>
                

                <ScrollView
                style={{
                    marginTop:10,
                }}>
                    {categories3.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={()=>navigation.navigate('fishs')}
                                 key={index} style={{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    marginTop:10,

                                }}>
                                    {chunk.map(category=>{
                                            return (
                                                <View key={category.id} style={{
                                                      width:width / 3 - 30,
                                                        marginHorizontal:10,
                                                        justifyContent:'center',
                                                        marginBottom:20,

                                                }}>
                                                <View style={{
                                                    position:'absolute',
                                                    top:0,
                                                    backgroundColor:'#fef9ea',
                                                    borderRadius:10,
                                                    width:width / 3 - 30,
                                                    height:width / 3 - 60,
                                                }}/>
                                                    <View>
                                                        <Image source={category.image} style={{
                                                            width:width / 3 - 30,
                                                            height:width / 3 - 70,
                                                        }}/>
                                                        <Text style={{
                                                            textAlign:'center',
                                                            fontWeight:'500',

                                                        }}>{category.title}</Text>
                                                    </View>
                                                </View>
                                            );

                                        })
                                    }
                          </TouchableOpacity>
                          
                            );
                        })
                    }
                </ScrollView>
                </View>



{/* second row */}
<View style={{flexDirection:'row'}}>
                <ScrollView
                style={{
                    marginTop:10,
                }}>
                    {categories4.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={()=>navigation.navigate('meats')}
                                 key={index} style={{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    marginTop:10,

                                }}>
                                    {chunk.map(category=>{
                                            return (
                                                <View key={category.id} style={{
                                                      width:width / 3 - 30,
                                                        marginHorizontal:10,
                                                        justifyContent:'center',
                                                        marginBottom:20,

                                                }}>
                                                <View style={{
                                                    position:'absolute',
                                                    top:0,
                                                    backgroundColor:'#fef9ea',
                                                    borderRadius:10,
                                                    width:width / 3 - 30,
                                                    height:width / 3 - 60,
                                                }}/>
                                                    <View>
                                                        <Image source={category.image} style={{
                                                            width:width / 3 - 30,
                                                            height:width / 3 - 70,
                                                        }}/>
                                                        <Text style={{
                                                            textAlign:'center',
                                                            fontWeight:'500',

                                                        }}>{category.title}</Text>
                                                    </View>
                                                </View>
                                            );

                                        })
                                    }
                          </TouchableOpacity>

                            );
                        })
                    }
                </ScrollView>
                <ScrollView
                style={{
                    marginTop:10,
                }}>
                    {categories5.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={()=>navigation.navigate('Bakeries')}
                                 key={index} style={{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    marginTop:10,

                                }}>
                                    {chunk.map(category=>{
                                            return (
                                                <View key={category.id} style={{
                                                      width:width / 3 - 30,
                                                        marginHorizontal:10,
                                                        justifyContent:'center',
                                                        marginBottom:20,

                                                }}>
                                                <View style={{
                                                    position:'absolute',
                                                    top:0,
                                                    backgroundColor:'#fef9ea',
                                                    borderRadius:10,
                                                    width:width / 3 - 30,
                                                    height:width / 3 - 60,
                                                }}/>
                                                    <View>
                                                        <Image source={category.image} style={{
                                                            width:width / 3 - 30,
                                                            height:width / 3 - 70,
                                                        }}/>
                                                        <Text style={{
                                                            textAlign:'center',
                                                            fontWeight:'500',

                                                        }}>{category.title}</Text>
                                                    </View>
                                                </View>
                                            );

                                        })
                                    }
                          </TouchableOpacity>
                          
                            );
                        })
                    }
                </ScrollView>
                

                <ScrollView
                style={{
                    marginTop:10,
                }}>
                    {categories6.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={()=>navigation.navigate('groceryies')}
                                 key={index} style={{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    marginTop:10,

                                }}>
                                    {chunk.map(category=>{
                                            return (
                                                <View key={category.id} style={{
                                                      width:width / 3 - 30,
                                                        marginHorizontal:10,
                                                        justifyContent:'center',
                                                        marginBottom:20,

                                                }}>
                                                <View style={{
                                                    position:'absolute',
                                                    top:0,
                                                    backgroundColor:'#fef9ea',
                                                    borderRadius:10,
                                                    width:width / 3 - 30,
                                                    height:width / 3 - 60,
                                                }}/>
                                                    <View>
                                                        <Image source={category.image} style={{
                                                            width:width / 3 - 30,
                                                            height:width / 3 - 70,
                                                        }}/>
                                                        <Text style={{
                                                            textAlign:'center',
                                                            fontWeight:'500',

                                                        }}>{category.title}</Text>
                                                    </View>
                                                </View>
                                            );

                                        })
                                    }
                          </TouchableOpacity>
                          
                            );
                        })
                    }
                </ScrollView>
                </View>

{/* End categery */}


            </View>
            <View style={{
                position:'absolute',
                width,
                bottom:-45,
                paddingBottom:60,
                paddingTop:20,
                paddingHorizontal:20,
                backgroundColor:'#ffffff',
                shadowColor:'#000000',
                shadowOffset:{
                    height:-2,
                    width:0,
                },
                shadowRadius:10,
                shadowOpacity:0.05,

            }}>
                <View
                style={{
                    flexDirection:'row',
                    paddingHorizontal:20,
                    justifyContent:'space-around',
                }} >
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8fffa',

    },
    header:{
        backgroundColor:'#fdc92e',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    headerwrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingBottom:50,
    },
    headerDetails:{
        flexDirection:'row',


    },
    headerimage:{
        height:50,
        width:50,
        borderRadius:50,
        borderColor:'#000000',
        borderWidth:2,
    },
    mapiconwrapper:{
        alignSelf:'center',

    },
    mapicon:{
        color:'#000000',
        marginRight:10,
    },
    headertitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:16,

    },
    headersubtitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:16,
        //textDecorationLine:'underline'


    },
    search:{
        marginHorizontal:28,
        backgroundColor:'#ffffff',
        borderRadius:20,
        padding:15,
        marginTop:-25,
        shadowColor:'#000000',
        shadowOffset:{
            height:5,
            width:0,
        },
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:1,


    },
    searchwrapper:{
        flexDirection:'row',

    },
    searchicon:{
        color:'#000000',
        marginRight:10,
        justifyContent:'center',
        marginTop:10,



    },
    searchinput:{
        color:'#b4b4b4',
        fontFamily:'Montserrat-Medium',
        //marginTop:5

    },
    highlightswrapper:{
        marginTop:20,
    },
    hightlight:{
        marginLeft:20,
        marginRight:10,
        paddingLeft:20,
        paddingRight:10,
        paddingBottom:20,

    },
    hightlightitem:{
        flexDirection:'row',
        alignItems:'flex-end',
        marginBottom:10,

    },
    chipscontainer:{
       backgroundColor:'#ff6a14',
       paddingHorizontal:20,
       paddingVertical:10,
       borderRadius:20,

    },
    chipps:{
        color:'#ffffff',
        textTransform:'uppercase',
        fontFamily:'Montserrat-Bold',
        fontSize:12,
    },
    hightlightimage:{
        height:100,
        width:100,
    },
    hightlightTitle:{
        fontWeight:'bold',
        fontSize:16,
        textTransform:'uppercase',
        color:'#000000',
        marginBottom:5,

    },
    hightlightsubTitle:{


        fontSize:12,
        color:'#000000',

    },
    categoryWrapper:{
        paddingHorizontal:20,
        marginTop:20,
        fles:1,

    },
    category:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',

    },
    categoryTitle:{
        fontWeight:'700',
        color:'#000000',
        fontSize:18,

    },
    categorysubtitle:{
        color:'#000000',
        textDecorationLine:'underline',

    },
    footericon:{
        color:'#000000',

    },









});

