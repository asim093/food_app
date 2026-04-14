import cn from 'clsx';
import { Fragment } from 'react';
import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import CartButton from "../../components/CartButton";
import { images, offers } from "../../constants";

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
                                    "offer-card ",
                                    isEven ? "flex-row-reverse" : "flex-row"
                                )}
                                style={{ backgroundColor: item.color }}
                                android_ripple={{ color: "#ffffff22" }}
                            >
                                {({ pressed }) => (
                                    <Fragment>
                                        <View className="h-full w-1/2 ">
                                            <Image
                                                source={item.image}
                                                className={"size-full"}
                                                resizeMode={"cover"}
                                            />
                                        </View>

                                        <View className={cn(
                                            "offer-card__info ",
                                            isEven ? "pl-10" : "pr-10"
                                        )}>
                                            <Text className="h3-bold text-white leading-tight">
                                                {item.title}
                                            </Text>
                                            <Image
                                                source={images.arrowRight}
                                                className="size-10"
                                                resizeMode="contain"
                                                style={{ tintColor: "#ffffff" }}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Pressable>
                        </View>
                    );
                }}
                contentContainerClassName="pb-28 px-5"
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