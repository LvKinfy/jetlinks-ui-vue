<template>
    <div>
        <a-select
            style="width: 300px; margin-bottom: 20px"
            @change="serverIdChange"
            :value="serverId"
            :options="serverNodeOptions"
            v-if="serverNodeOptions.length > 1"
        ></a-select>
        <div class="dash-board">
            <div class="dash-board-item">
                <TopEchartsItemNode title="CPU使用率" :value="topValues.cpu" />
            </div>
            <div class="dash-board-item">
                <TopEchartsItemNode
                    title="JVM内存"
                    :max="topValues.jvmTotal"
                    :bottom="`总JVM内存 ${topValues.jvmTotal}G`"
                    formatter="G"
                    :value="topValues.jvm"
                />
            </div>
            <div class="dash-board-item">
                <TopEchartsItemNode
                    title="磁盘占用"
                    :max="topValues.usageTotal"
                    :bottom="`总磁盘大小 ${topValues.usageTotal}G`"
                    formatter="G"
                    :value="topValues.usage"
                />
            </div>
            <div class="dash-board-item">
                <TopEchartsItemNode
                    title="系统内存"
                    :max="topValues.systemUsageTotal"
                    :bottom="`系统内存 ${topValues.systemUsageTotal}G`"
                    formatter="G"
                    :value="topValues.systemUsage"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="TopCard">
import { serverNode } from '@/api/link/dashboard';
import TopEchartsItemNode from './TopEchartsItemNode.vue';
import { getWebSocket } from '@/utils/websocket';
import { map } from 'rxjs/operators';

const serverId = ref();
const serverNodeOptions = ref([]);
const topValues = ref({
    cpu: 0,
    jvm: 0,
    jvmTotal: 0,
    usage: 0,
    usageTotal: 0,
    systemUsage: 0,
    systemUsageTotal: 0,
});

const serverIdChange = (val: string) => {
    serverId.value = val;
};

const getData = () => {
    const id = 'operations-statistics-system-info-realTime';
    const topic = '/dashboard/systemMonitor/stats/info/realTime';
    getWebSocket(id, topic, {
        type: 'all',
        serverNodeId: serverId.value,
        interval: '1s',
        agg: 'avg',
    })
        .pipe(map((res) => res.payload))
        .subscribe((payload) => {
            const {
                value: { cpu, memory, disk },
            } = payload;
            topValues.value = {
                cpu: cpu.systemUsage,
                jvm: Number(
                    (
                        (memory.jvmHeapUsage / 100) *
                        (memory.jvmHeapTotal / 1024)
                    ).toFixed(1),
                ),
                jvmTotal: Math.ceil(memory.jvmHeapTotal / 1024),
                usage: Number(
                    ((disk.total / 1024) * (disk.usage / 100)).toFixed(1),
                ),
                usageTotal: Math.ceil(disk.total / 1024),
                systemUsage: Number(
                    (
                        (memory.systemTotal / 1024) *
                        (memory.systemUsage / 100)
                    ).toFixed(1),
                ),
                systemUsageTotal: Math.ceil(memory.systemTotal / 1024),
            };
        });
};

onMounted(() => {
    serverNode().then((resp) => {
        if (resp.success) {
            serverNodeOptions.value = resp.result.map((item) => ({
                label: item.name,
                value: item.id,
            }));
            if (serverNodeOptions.value.length) {
                serverId.value = serverNodeOptions.value[0]?.value;
            }
        }
    });
});
watch(
    () => serverId.value,
    (val) => {
        val && getData();
    },
);
</script>

<style lang="less" scoped>
.dash-board {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 2.73036px 5.46071px rgba(31, 89, 245, 0.2);
    border-radius: 2px;
    justify-content: space-between;
    .dash-board-item {
        flex: 1;
        margin: 24px 12px;
        min-width: 250px;
    }
}
</style>