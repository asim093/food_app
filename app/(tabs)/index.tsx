import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { images, offers } from "../../constants";
import { Fragment } from "react";
import cn from 'clsx';
import CartButton from "../../components/CartButton";

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <FlatList
                data={offers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => {
                    const isEven = index % 2 === 0;
                    return (
                        <View className="mb-4">
                            <Pressable
                                className={cn(
                                    "h-32 rounded-xl p-4 mb-2",
                                    isEven ? "flex-row-reverse" : "flex-row"
                                )}
                                style={{ backgroundColor: item.color }}
                                android_ripple={{ color: "#ffffff22" }}
                            >
                                <View className="h-full w-1/2">
                                    <Image
                                        source={item.image}
                                        className="w-full h-full"
                                        resizeMode="contain"
                                    />
                                </View>

                                <View className={cn(
                                    "flex-1 justify-between items-start",
                                    isEven ? "pl-5" : "pr-4"
                                )}>
                                    <Text className="text-2xl font-bold text-white leading-7">
                                        {item.title}
                                    </Text>
                                    <Image
                                        source={images.arrowRight}
                                        className="w-10 h-10"
                                        resizeMode="contain"
                                        style={{ tintColor: "#ffffff" }}
                                    />
                                </View>
                            </Pressable>
                        </View>
                    );
                }}
                contentContainerStyle={{
                    paddingBottom: 112, // pb-28
                    paddingHorizontal: 16, // px-4
                }}
                ListHeaderComponent={() => (
                    <View className="flex-row justify-between items-center w-full my-5 pt-2">
                        <View className="items-start">
                            <Text className="text-xs font-bold text-blue-500 mb-1">
                                DELIVER TO
                            </Text>
                            <TouchableOpacity className="flex-row items-center gap-1 mt-0.5">
                                <Text className="text-base font-bold text-gray-900">
                                    Croatia
                                </Text>
                                <Image
                                    source={images.arrowDown}
                                    className="w-3 h-3"
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <CartButton />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}