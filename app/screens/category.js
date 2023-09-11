/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,StyleSheet,Image, SafeAreaViewText,TouchableOpacity,Dimensions,TextInput,Text,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import categories from '../data/categories';
import categories2 from '../data/categories2';
import categories3 from '../data/categories3';
import categories4 from '../data/categories4';
import categories5 from '../data/categories5';
import categories6 from '../data/categories6';
import categories7 from '../data/categories7';
import categories8 from '../data/categories8';
import categories9 from '../data/categories9';
import categories10 from '../data/categories10';
import categories11 from '../data/categories11';
import categories12 from '../data/categories12';



const {width,height} = Dimensions.get('window');
export default class category extends Component {
    veg =()=>{
        this.props.navigation.navigate('vegitables')
    }
    fruit =()=>{
        this.props.navigation.navigate('fruits')
    }
    fish =()=>{
        this.props.navigation.navigate('fishs')
    }
    meat=()=>{
        this.props.navigation.navigate('meats')
    }
    bakery =()=>{
        this.props.navigation.navigate('Bakeries')
    }
    grosery=()=>{
        this.props.navigation.navigate('groceryies')
    }
    schoolItem =()=>{
        this.props.navigation.navigate('schoolitems')
    }
    pramacy =()=>{
        this.props.navigation.navigate('pharmcyitem')
    }
    babyItem =()=>{
        this.props.navigation.navigate('babyitem')
    }
    houseHold =()=>{
        this.props.navigation.navigate('households')
    }
    OilsProducts =()=>{
        this.props.navigation.navigate('oils')
    }
    Beverage =()=>{
        this.props.navigation.navigate('beverages')
    }

    back =()=>{
        this.props.navigation.goBack('Home');
    }
    render (){
    
  return (
    <View style={styles.container}>
        <SafeAreaView style ={styles.header}>
            <View style={styles.headerwrapper}>
                <View style={styles.headerDetails}>
                    <TouchableOpacity  style={styles.mapiconwrapper}>
                        <Icon name ="chevron-left" size ={25} style={styles.mapicon} onPress={this.back} />
                    </TouchableOpacity>
                <View style={styles.headertitle0} >

                <Text style={styles.headertitle}> Welcome to Super Fresh </Text>
                
                </View>
            </View>
            <View>
                <Image source={require('../assest/image/onboard1.png')} style={styles.headerimage} />
            </View>
            </View>
        </SafeAreaView>
        <View style={styles.search}>
                <View style={styles.searchwrapper}>
                    <Icon name="search" size={20} style={styles.searchicon}/>
                    <TextInput placeholder="Search for anything" style={styles.searchinput}/>
                </View>
                <View>
                <View style={{flexDirection:'row'}}>
                <ScrollView
                style={{
                    marginTop:10,
                }}>
                    {categories.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                 onPress={this.veg}
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
                                 onPress={this.fruit}
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
                                onPress={this.fish}
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
                                onPress={this.meat}
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
                                onPress={this.bakery}
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
                                onPress={this.grosery}
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
 {/* 3 rd row                 */}

 


 <View style={{flexDirection:'row'}}>
                <ScrollView
                style={{
                    marginTop:10,
                }}>
                    {categories7.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={this.Beverage}
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
                    {categories8.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={this.houseHold}
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
                    {categories9.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={this.schoolItem}
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



{/* fourth row */}
<View style={{flexDirection:'row'}}>
                <ScrollView
                style={{
                    marginTop:10,
                }}>
                    {categories10.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={this.pramacy}
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
                    {categories11.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                 onPress={this.babyItem}
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
                    {categories12.map((chunk,index)=>{
                            return (
                                <TouchableOpacity 
                                 onPress={this.OilsProducts}
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

                </View>
            </View>
    </View>
    
  )}
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
        height:70,
        width:70,
        //borderRadius:50,
        borderColor:'#000000',
        //borderWidth:2,
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
    headertitle0:{
      marginTop:28
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
  })