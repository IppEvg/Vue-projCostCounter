import NewCostForm from './NewCostForm.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './CostsList.vue';

function __VLS_template() {
    let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
    /* Components */
    let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
    let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
    let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
    let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
    /* Style Scoped */
    type __VLS_StyleScopedClasses = {} &
    { 'form-leave-to'?: boolean; } &
    { 'form-leave'?: boolean; } &
    { 'form-enter-active'?: boolean; } &
    { 'form-leave-active'?: boolean; } &
    { 'wrap'?: boolean; } &
    { 'add'?: boolean; } &
    { 'summ'?: boolean; } &
    { 'modalwrap'?: boolean; } &
    { 'modal'?: boolean; } &
    { 'list'?: boolean; } &
    { 'item'?: boolean; } &
    { 'color'?: boolean; };
    let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents!: {} &
        __VLS_WithComponent<'transition', typeof __VLS_localComponents, "Transition", "transition", "transition"> &
        __VLS_WithComponent<'NewCostForm', typeof __VLS_localComponents, "NewCostForm", "NewCostForm", "NewCostForm">;
    __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
    __VLS_components.Transition; __VLS_components.Transition; __VLS_components.transition; __VLS_components.transition;
    // @ts-ignore
    [transition, transition,];
    __VLS_components.NewCostForm; __VLS_components.NewCostForm;
    // @ts-ignore
    [NewCostForm, NewCostForm,];
    __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("wrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("wrap"), });
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
        let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
        {
            const __VLS_5 = __VLS_intrinsicElements["button"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{ onClick: {} as any, }, class: ("add"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("add"), });
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
            let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
            let __VLS_10 = { 'click': __VLS_pickEvent(__VLS_9['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_7>).onClick) };
            __VLS_10 = {
                click: $event => {
                    __VLS_ctx.showChenge();
                    // @ts-ignore
                    [showChenge,];
                }
            };
            (__VLS_8.slots!).default;
        }
        {
            const __VLS_11 = __VLS_intrinsicElements["div"];
            const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
            const __VLS_13 = __VLS_12({ ...{}, class: ("modalwrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_13> & Record<string, unknown>) => void)({ ...{}, class: ("modalwrap"), });
            const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13)!;
            let __VLS_15!: __VLS_NormalizeEmits<typeof __VLS_14.emit>;
            {
                let __VLS_16!: 'Transition' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Transition : 'transition' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.transition : (typeof __VLS_resolvedLocalAndGlobalComponents)['transition'];
                const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{}, name: ("form"), }));
                ({} as { transition: typeof __VLS_16; }).transition;
                ({} as { transition: typeof __VLS_16; }).transition;
                const __VLS_18 = __VLS_17({ ...{}, name: ("form"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{}, name: ("form"), });
                const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
                let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>;
                if (this.$store.getters.getShow) {
                    {
                        let __VLS_21!: 'NewCostForm' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NewCostForm : (typeof __VLS_resolvedLocalAndGlobalComponents)['NewCostForm'];
                        const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, class: ("modal"), }));
                        ({} as { NewCostForm: typeof __VLS_21; }).NewCostForm;
                        ({} as { NewCostForm: typeof __VLS_21; }).NewCostForm;
                        const __VLS_23 = __VLS_22({ ...{}, class: ("modal"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, class: ("modal"), });
                        const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
                        let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
                    }
                }
                (__VLS_19.slots!).default;
            }
            (__VLS_14.slots!).default;
        }
        {
            const __VLS_26 = __VLS_intrinsicElements["p"];
            const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
            const __VLS_28 = __VLS_27({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, });
            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
            let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
            {
                const __VLS_31 = __VLS_intrinsicElements["span"];
                const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
                const __VLS_33 = __VLS_32({ ...{}, class: ("summ"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, class: ("summ"), });
                const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
                let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
                (this.$store.getters.getSumm);
                (__VLS_34.slots!).default;
            }
            (__VLS_29.slots!).default;
        }
        {
            const __VLS_36 = __VLS_intrinsicElements["div"];
            const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
            const __VLS_38 = __VLS_37({ ...{}, class: ("list"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, class: ("list"), });
            const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
            let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
            {
                const __VLS_41 = __VLS_intrinsicElements["div"];
                const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
                const __VLS_43 = __VLS_42({ ...{}, class: ("item color"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: ("item color"), });
                const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
                let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
                {
                    const __VLS_46 = __VLS_intrinsicElements["p"];
                    const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
                    const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, });
                    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
                    let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
                    (__VLS_49.slots!).default;
                }
                {
                    const __VLS_51 = __VLS_intrinsicElements["p"];
                    const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
                    const __VLS_53 = __VLS_52({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, });
                    const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
                    let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
                    (__VLS_54.slots!).default;
                }
                {
                    const __VLS_56 = __VLS_intrinsicElements["p"];
                    const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
                    const __VLS_58 = __VLS_57({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, });
                    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
                    let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
                    (__VLS_59.slots!).default;
                }
                {
                    const __VLS_61 = __VLS_intrinsicElements["p"];
                    const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
                    const __VLS_63 = __VLS_62({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, });
                    const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
                    let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
                    (__VLS_64.slots!).default;
                }
                {
                    const __VLS_66 = __VLS_intrinsicElements["p"];
                    const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
                    const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, });
                    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
                    let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
                    (__VLS_69.slots!).default;
                }
                {
                    const __VLS_71 = __VLS_intrinsicElements["p"];
                    const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
                    const __VLS_73 = __VLS_72({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, });
                    const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
                    let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
                    (__VLS_74.slots!).default;
                }
                (__VLS_44.slots!).default;
            }
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.getProd)!)) {
                {
                    const __VLS_76 = __VLS_intrinsicElements["div"];
                    const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
                    const __VLS_78 = __VLS_77({ ...{}, key: ("item.id"), class: ("item"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, key: ("item.id"), class: ("item"), });
                    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
                    let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
                    {
                        const __VLS_81 = __VLS_intrinsicElements["p"];
                        const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
                        const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{}, });
                        const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
                        let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
                        (item.id);
                        (__VLS_84.slots!).default;
                    }
                    {
                        const __VLS_86 = __VLS_intrinsicElements["p"];
                        const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
                        const __VLS_88 = __VLS_87({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, });
                        const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
                        let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
                        (item.date);
                        (__VLS_89.slots!).default;
                    }
                    {
                        const __VLS_91 = __VLS_intrinsicElements["p"];
                        const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
                        const __VLS_93 = __VLS_92({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{}, });
                        const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
                        let __VLS_95!: __VLS_NormalizeEmits<typeof __VLS_94.emit>;
                        (item.category);
                        (__VLS_94.slots!).default;
                    }
                    {
                        const __VLS_96 = __VLS_intrinsicElements["p"];
                        const __VLS_97 = __VLS_elementAsFunctionalComponent(__VLS_96);
                        const __VLS_98 = __VLS_97({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_96, typeof __VLS_98> & Record<string, unknown>) => void)({ ...{}, });
                        const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98)!;
                        let __VLS_100!: __VLS_NormalizeEmits<typeof __VLS_99.emit>;
                        (item.value);
                        (__VLS_99.slots!).default;
                    }
                    {
                        const __VLS_101 = __VLS_intrinsicElements["div"];
                        const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
                        const __VLS_103 = __VLS_102({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_102));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_101, typeof __VLS_103> & Record<string, unknown>) => void)({ ...{}, });
                        const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
                        let __VLS_105!: __VLS_NormalizeEmits<typeof __VLS_104.emit>;
                        {
                            const __VLS_106 = __VLS_intrinsicElements["button"];
                            const __VLS_107 = __VLS_elementAsFunctionalComponent(__VLS_106);
                            const __VLS_108 = __VLS_107({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_107));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_106, typeof __VLS_108> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
                            const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108)!;
                            let __VLS_110!: __VLS_NormalizeEmits<typeof __VLS_109.emit>;
                            let __VLS_111 = { 'click': __VLS_pickEvent(__VLS_110['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_107, typeof __VLS_108>).onClick) };
                            __VLS_111 = {
                                click: $event => {
                                    __VLS_ctx.showChenge(item);
                                    // @ts-ignore
                                    [getProd, showChenge,];
                                }
                            };
                            {
                                const __VLS_112 = __VLS_intrinsicElements["img"];
                                const __VLS_113 = __VLS_elementAsFunctionalComponent(__VLS_112);
                                const __VLS_114 = __VLS_113({ ...{}, src: ("../../public/icons/edit.svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_112, typeof __VLS_114> & Record<string, unknown>) => void)({ ...{}, src: ("../../public/icons/edit.svg"), });
                                const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114)!;
                                let __VLS_116!: __VLS_NormalizeEmits<typeof __VLS_115.emit>;
                            }
                            (__VLS_109.slots!).default;
                        }
                        (__VLS_104.slots!).default;
                    }
                    {
                        const __VLS_117 = __VLS_intrinsicElements["div"];
                        const __VLS_118 = __VLS_elementAsFunctionalComponent(__VLS_117);
                        const __VLS_119 = __VLS_118({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_118));
                        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_117, typeof __VLS_119> & Record<string, unknown>) => void)({ ...{}, });
                        const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119)!;
                        let __VLS_121!: __VLS_NormalizeEmits<typeof __VLS_120.emit>;
                        {
                            const __VLS_122 = __VLS_intrinsicElements["button"];
                            const __VLS_123 = __VLS_elementAsFunctionalComponent(__VLS_122);
                            const __VLS_124 = __VLS_123({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_123));
                            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_122, typeof __VLS_124> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
                            const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124)!;
                            let __VLS_126!: __VLS_NormalizeEmits<typeof __VLS_125.emit>;
                            let __VLS_127 = { 'click': __VLS_pickEvent(__VLS_126['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_123, typeof __VLS_124>).onClick) };
                            __VLS_127 = {
                                click: $event => {
                                    __VLS_ctx.deleteProduct(item);
                                    // @ts-ignore
                                    [deleteProduct,];
                                }
                            };
                            {
                                const __VLS_128 = __VLS_intrinsicElements["img"];
                                const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128);
                                const __VLS_130 = __VLS_129({ ...{}, src: ("../../public/icons/del.svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
                                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_128, typeof __VLS_130> & Record<string, unknown>) => void)({ ...{}, src: ("../../public/icons/del.svg"), });
                                const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130)!;
                                let __VLS_132!: __VLS_NormalizeEmits<typeof __VLS_131.emit>;
                            }
                            (__VLS_125.slots!).default;
                        }
                        (__VLS_120.slots!).default;
                    }
                    (__VLS_79.slots!).default;
                }
            }
            (__VLS_39.slots!).default;
        }
        (__VLS_3.slots!).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["wrap"];
        __VLS_styleScopedClasses["add"];
        __VLS_styleScopedClasses["modalwrap"];
        __VLS_styleScopedClasses["modal"];
        __VLS_styleScopedClasses["summ"];
        __VLS_styleScopedClasses["list"];
        __VLS_styleScopedClasses["item"];
        __VLS_styleScopedClasses["color"];
        __VLS_styleScopedClasses["item"];
    }
    var __VLS_slots!: {};
    return __VLS_slots;
}
